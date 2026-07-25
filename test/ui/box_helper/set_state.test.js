import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper set_state method', () => {
    it('should update the box parameters, transform and half_sxy', () => {
        const bh = get_bh()
        const upd_spy = vi.spyOn(bh, 'upd_transform')
        bh.set_state([0.0, 1.0, 2.0, 3.0, 4.0])
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([0.0, 1.0, 2.0, 3.0, 4.0])
        expect(bh.half_sxy[0]).toBeCloseTo(1.5)
        expect(bh.half_sxy[1]).toBeCloseTo(2.0)
        expect(upd_spy).toHaveBeenCalledTimes(1)
    })

    it('should now allow too narrow or short boxes', () => {
        const bh = get_bh()
        bh.set_state([0.0, 1.0, 2.0, 0.1, 0.2])
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([0.0, 1.0, 2.0, 0.5, 0.5])
        expect(bh.half_sxy[0]).toBeCloseTo(0.25)
        expect(bh.half_sxy[1]).toBeCloseTo(0.25)
    })

    it('should keep yaw angle within 0..2 pi bounds', () => {
        const bh = get_bh()
        bh.set_state([0.0, 1.0, 123.0, 3.0, 4.0])
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([0.0, 1.0, 3.619479179382324, 3.0, 4.0])
    })
})
