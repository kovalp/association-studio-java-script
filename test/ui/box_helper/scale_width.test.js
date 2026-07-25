import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper scale (box) width method', () => {
    it('should update the box width and transform', () => {
        const bh = get_bh()
        const cb_spy = vi.spyOn(bh, 'change_state_callback')

        bh.scale_width(1.23)
        expect(bh.xy_yaw_lw[4]).toBeCloseTo(6.23)
        expect(bh.half_sxy[1]).toBeCloseTo(3.115)
        expect(cb_spy).toHaveBeenCalledTimes(1)
    })

    it('should not allow too narrow boxes', () => {
        const bh = get_bh()
        const cb_spy = vi.spyOn(bh, 'change_state_callback')
        bh.scale_width(-5.67)
        expect(bh.xy_yaw_lw[4]).toBeCloseTo(0.5)
        expect(bh.half_sxy[1]).toBeCloseTo(0.25)
        expect(cb_spy).toHaveBeenCalledTimes(1)
    })

})
