import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper rotate method', () => {
    it('should update the angle and the transform', () => {
        const bh = get_bh()
        const upd_spy = vi.spyOn(bh, 'upd_transform')
        bh.rotate(76.123)
        expect(bh.xy_yaw_lw[2]).toBeCloseTo(3.7247774600982666)
        expect(upd_spy).toHaveBeenCalledTimes(1)
    })
})
