import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper set_x method', () => {
    it('should update the box position and transform', () => {
        const bh = get_bh()
        const upd_spy = vi.spyOn(bh, 'upd_transform')
        bh.set_x(1.234)
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([1.234, 2.0, 3.0, 4.0, 5.0])
        expect(upd_spy).toHaveBeenCalledTimes(1)
    })
})
