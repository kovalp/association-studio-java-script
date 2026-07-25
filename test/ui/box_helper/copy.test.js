import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'
import { BoxHelper } from '@/ui/box_helper'

describe('BoxHelper copy method', () => {
    it('should return the new instance with the same internals', () => {
        const bh = get_bh()
        const bh_cp = bh.copy()
        expect(bh_cp).toBeInstanceOf(BoxHelper)
        expect(bh_cp === bh).toBe(false)
        expect(bh_cp.xy_yaw_lw).toBeDeepCloseTo(bh.xy_yaw_lw)
        expect(bh_cp.transform).toBeDeepCloseTo(bh.transform)
        expect(bh_cp.half_sxy).toBeDeepCloseTo(bh.half_sxy)
        expect(bh_cp.change_state_callback === bh.change_state_callback).toBe(true)
    })
})
