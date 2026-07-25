import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper translate method', () => {
    it('should update position and the transform', () => {
        const bh = get_bh()
        const upd_spy = vi.spyOn(bh, 'upd_transform')

        bh.translate(1.23, 4.56)
        expect(bh.width).toBe(640)
        expect(bh.height).toBe(480)
        expect(bh.xy_yaw_lw[0]).toBeCloseTo(2.23)
        expect(bh.xy_yaw_lw[1]).toBeCloseTo(6.56)
        expect(upd_spy).toHaveBeenCalledTimes(1)
    })
})
