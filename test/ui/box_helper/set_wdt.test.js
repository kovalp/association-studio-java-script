import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper set_wdt method', () => {
    it('should update the box width and call the callback', () => {
        const bh = get_bh()
        const cb_spy = vi.spyOn(bh, 'change_state_callback')
        bh.set_wdt(3.456)
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 3.0, 4.0, 3.456])
        expect(bh.half_sxy).toBeDeepCloseTo([2.0, 1.728])
        expect(cb_spy).toHaveBeenCalledTimes(1)
    })
})
