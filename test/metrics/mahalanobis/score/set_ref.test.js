    import { describe, it, expect } from 'vitest'
import { get_score_aux } from './conftest'

describe('set_ref method', () => {
    it('should set the ref box from (xy, yaw, size)', () => {
        const sa = get_score_aux()
        const id_before = sa.ref.xy_cs_lw
        sa.set_ref([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(sa.ref.xy_cs_lw === id_before).toBe(true)
        expect(sa.ref.xy_cs_lw).toBeDeepCloseTo([
            1, 2, -0.9899924966004454, 0.1411200080598672, 4, 5,
        ])
        expect(sa.probe.xy_cs_lw).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3, 1.5])
    })
})
