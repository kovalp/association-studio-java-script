import { describe, it, expect } from 'vitest'
import { ScoreComputer } from '@/metrics/score_computer.js'

describe('compute_for', () => {
    it('should compute the scores', () => {
        const sc = new ScoreComputer([0, 0, 0, 3, 1.5])
        sc.mahalanobis_score.pair.dia_inv_cov[2] = 4
        sc.mahalanobis_score.pair.dia_inv_cov[3] = 4
        const state_yaw = new Float32Array([1, 2, 3, 4, 5])
        const scores = sc.compute_for(state_yaw)
        expect(sc.probe).toBeDeepCloseTo([1, 2, 3, 4, 5])
        expect(scores).toBeDeepCloseTo({
            giou: 0.5254803675856308,
            maha: 0.04708370357494904,
            smma: 0.5245096880671675,
        })
    })
})
