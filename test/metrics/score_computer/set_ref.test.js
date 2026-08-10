import { describe, it, expect } from 'vitest'
import { ScoreComputer } from '@/metrics/score_computer.js'

describe('set_ref', () => {
    it('should set reference in every metric drivers and store the copy of ref state', () => {
        const sc = new ScoreComputer([0, 0, 0, 3, 1.5])
        sc.mahalanobis_score.pair.dia_inv_cov[2] = 4
        sc.mahalanobis_score.pair.dia_inv_cov[3] = 4
        const state_yaw = new Float32Array([1, 2, 3, 4, 5])
        sc.set_ref(state_yaw)
        expect(sc.ref === state_yaw).toBe(false)
        expect(sc.ref).toBeDeepCloseTo([1, 2, 3, 4, 5])
        const ref_attr = { min_x: -1, max_x: 3, min_y: -0.5, max_y: 4.5, area: 20 }
        expect(sc.iou_score.ref).toBeDeepCloseTo(ref_attr)
        expect(sc.size_mod_score.ref).toBeDeepCloseTo([1, 2, Math.cos(1.5), Math.sin(1.5), 4, 5])
        expect(sc.mahalanobis_score.ref).toBeDeepCloseTo([1, 2, Math.cos(3), Math.sin(3), 4, 5])
    })
})
