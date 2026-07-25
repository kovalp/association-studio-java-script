import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper scale (box) length method', () => {
    it('should update the box length and transform', () => {
        const bh = get_bh()
        const cb_spy = vi.spyOn(bh, 'change_state_callback')

        bh.scale_length(1.23)
        expect(bh.xy_yaw_lw[3]).toBeCloseTo(5.23)
        expect(bh.half_sxy[0]).toBeCloseTo(2.615)
        expect(cb_spy).toHaveBeenCalledTimes(1)
    })

    it('should not allow too short boxes', () => {
        const bh = get_bh()
        const cb_spy = vi.spyOn(bh, 'change_state_callback')
        bh.scale_length(-5.67)
        expect(bh.xy_yaw_lw[3]).toBeCloseTo(0.5)
        expect(bh.half_sxy[0]).toBeCloseTo(0.25)
        expect(cb_spy).toHaveBeenCalledTimes(1)
    })
})
