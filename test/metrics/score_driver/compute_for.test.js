import { describe, it, expect } from 'vitest'
import { ScoreDriver } from '@/metrics/score_driver'

describe('compute_for', () => {
    it('should compute the scores', () => {
        const sd = new ScoreDriver()
        sd.computer.mahalanobis_score.pair.dia_inv_cov[2] = 4
        sd.computer.mahalanobis_score.pair.dia_inv_cov[3] = 4
        const state_yaw = new Float32Array([1, 2, 3, 4, 5])
        const scores = sd.compute_for(state_yaw)
        expect(scores).toBeDeepCloseTo({
            giou: 0.5254803675856308,
            maha: 0.04708370357494904,
            smma: 0.5245096880671675,
        })
        expect(sd.storage.current_idx).toBe(1)
        expect(sd.storage.giou_scores).toBeDeepCloseTo([0.5254803675856308])
        expect(sd.storage.maha_scores).toBeDeepCloseTo([0.04708370357494904])
        expect(sd.storage.smma_scores).toBeDeepCloseTo([0.5245096880671675])
    })
})
