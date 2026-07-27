import { describe, it, expect, vi } from 'vitest'
import { get_bb } from './conftest'

describe('BoxBackend change yaw listener', () => {
    it('should set the yaw and draw', () => {
        const { box_back: bb, event } = get_bb()
        vi.spyOn(bb, 'draw')
        bb.change_yaw(event)
        expect(bb.draw).toHaveBeenCalledTimes(1)
        expect(bb.box.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 0.021467549726366997, 4.0, 5.0])
    })
})
