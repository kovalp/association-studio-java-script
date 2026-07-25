import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper set_yaw method', () => {
    it('should update the box orientation and transform', () => {
        const bh = get_bh()
        const upd_spy = vi.spyOn(bh, 'upd_transform')
        bh.set_yaw(123.4)
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 4.0194807052612305, 4.0, 5.0])
        expect(upd_spy).toHaveBeenCalledTimes(1)
    })
})
