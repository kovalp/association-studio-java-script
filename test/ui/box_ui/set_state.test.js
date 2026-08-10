import { describe, it, expect, vi } from 'vitest'
import { get_bb } from './conftest'

describe('BoxUi state setter', () => {
    it('should update this.box & draw', () => {
        const { box_back: bb } = get_bb()
        bb.set_state([0, 1, 2, 3, 4])
        expect(bb.box.xy_yaw_lw).toBeDeepCloseTo([0, 1, 2, 3, 4])
        expect(bb.draw).toHaveBeenCalledTimes(1)
    })
})
