import { describe, it, expect } from 'vitest'
import { get_score_aux } from './conftest'

describe('compute_for method', () => {
    it('should redefine the probe box and compute the score', () => {
        const sa = get_score_aux()
        const id_before = sa.probe.xy_cs_lw
        sa.pair.dia_inv_cov[2] = 4.0
        sa.pair.dia_inv_cov[3] = 4.0
        const score = sa.compute_for([1.4, 2.3, 0.123, 3.2, 4.1])
        expect(sa.probe.xy_cs_lw === id_before).toBe(true)
        expect(sa.probe.xy_cs_lw).toBeDeepCloseTo([
            1.4, 2.3, 0.9924450516700745, 0.12269008904695511, 3.2, 4.1,
        ])
        expect(score).toBeCloseTo(0.22810408609670327)
        expect(sa.pair.sqr_maha_dist).toBeCloseTo(17.735438834787885)
        expect(sa.pair.sqr_pos_diff).toBeCloseTo(7.249999713897708)
        expect(sa.pair.sqr_yaw_diff).toBeCloseTo(0.015109935194617619)
        expect(sa.pair.sqr_size_diff).toBeCloseTo(6.799999523162853)
    })
})
