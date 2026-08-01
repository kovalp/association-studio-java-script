import { Frontend } from '@/ui/frontend'
import { ScoreDriver } from '@/metrics/score_driver'
import { DOMMatrix, DOMPoint } from 'canvas'
import { index_fixture } from '../../setup.js'

beforeEach(() => {
    vi.stubGlobal('DOMMatrix', DOMMatrix)
    vi.stubGlobal('DOMPoint', DOMPoint)
})

afterEach(() => {
    vi.unstubAllGlobals()
})

function get_front() {
    const sd = new ScoreDriver()
    sd.mahalanobis_score.pair.dia_inv_cov[2] = 4
    sd.mahalanobis_score.pair.dia_inv_cov[3] = 4
    const previous_query_selector = index_fixture.querySelector.bind(index_fixture)
    index_fixture.querySelector = (tag) => {
        const stage_with_mocked_rect = document.createElement('div')
        stage_with_mocked_rect.getBoundingClientRect = () => {
            return new DOMRect(0, 0, 640, 480)
        }
        if (tag === '#stage') {
            return stage_with_mocked_rect
        } else {
            return previous_query_selector(tag)
        }
    }
    return new Frontend(sd, index_fixture)
}

export { get_front }
