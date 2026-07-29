import { Frontend } from '@/ui/frontend'
import { ScoreDriver } from '@/metrics/score_driver'
import { DOMMatrix, DOMPoint } from 'canvas'

const fixture = document.createElement('div')
fixture.innerHTML = `
            <button id="reset-btn"></button>
            <span id="score-val1">1</span>
            <span id="score-val2">2</span>
            <input id="explain-mahalanobis-chk-box" type="checkbox">
            <div id="explain-mahalanobis-panel"></div>
            <input id="inp-x" type="number">
            <input id="inp-y" type="number">
            <input id="inp-yaw" type="number">
            <input id="inp-len" type="number">
            <input id="inp-wdt" type="number">

            <input id="precision-pos" type="number">
            <input id="precision-yaw" type="number">
            <input id="precision-size" type="number">
            
            <span id="sqr-pos-diff">sqr pos diff</span>
            <span id="sqr-yaw-diff">sqr yaw diff</span>
            <span id="sqr-size-diff">sqr size diff</span>
            <span id="sqr-maha-dist">sqr maha dist</span>
            
            <div id="stage">
                <canvas id="stage-ui" width="640" height="320"></canvas>
                <canvas id="stage-bg" width="640" height="320"></canvas>
            </div>

`

beforeEach(() => {
    vi.stubGlobal('DOMMatrix', DOMMatrix)
    vi.stubGlobal('DOMPoint', DOMPoint)
})

afterEach(() => {
    vi.unstubAllGlobals()
})

function get_front() {
    const sd = new ScoreDriver()
    const previous_query_selector = fixture.querySelector.bind(fixture)
    fixture.querySelector = (tag) => {
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
    return new Frontend(sd, fixture)
}

export { get_front }
