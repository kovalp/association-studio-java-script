import { describe, it, expect } from 'vitest'
import { ScoreDriver } from '@/metrics/score_driver'

describe('compute_for', () => {
    it('should compute the scores', () => {
        const sd = new ScoreDriver()
        sd.mahalanobis_score.pair.dia_inv_cov[2] = 4
        sd.mahalanobis_score.pair.dia_inv_cov[3] = 4
        const state_yaw = new Float32Array([1.0, 2.0, 3.0, 4.0, 5.0])
        const scores = sd.compute_for(state_yaw)
        expect(scores).toBeDeepCloseTo({
            giou: 0.5254803675856308,
            maha: 0.04708370357494904,
            size_mod: 0.5245096880671675,
        })
    })
})
