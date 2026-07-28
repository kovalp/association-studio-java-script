import { describe, it, expect } from 'vitest'
import { ScoreDriver } from '@/metrics/score_driver'

describe('set precision wrapper', () => {
    it('calls downstream', () => {
        const sd = new ScoreDriver()
        vi.spyOn(sd.mahalanobis_score, 'set_precision')
        sd.set_precision(1.23, 'precision-pos')
        expect(sd.mahalanobis_score.set_precision).toHaveBeenCalledWith(1.23, 'precision-pos')
    })
})
