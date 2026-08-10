import { describe, it, expect } from 'vitest'
import { ScoreComputer } from '@/metrics/score_computer'

describe('set precision wrapper', () => {
    it('calls downstream', () => {
        const sc = new ScoreComputer([0, 0, 0, 3, 1.5])
        vi.spyOn(sc.mahalanobis_score, 'set_precision')
        sc.set_precision(1.23, 'precision-pos')
        expect(sc.mahalanobis_score.set_precision).toHaveBeenCalledWith(1.23, 'precision-pos')
    })
})
