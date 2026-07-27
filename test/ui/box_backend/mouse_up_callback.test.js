import { describe, it, expect, vi } from 'vitest'
import { get_bb } from './conftest'

describe('BoxBackend mouse_up callback', () => {
    it('should reset the dragging flag and call change_and_draw', () => {
        const { box_back: bb, event: event } = get_bb()
        bb.is_dragging = true
        vi.spyOn(bb, 'change_and_draw')
        bb.mouse_up_callback(event)
        expect(bb.is_dragging).toBe(false)
        expect(bb.change_and_draw).toHaveBeenCalledWith(bb.box, event)
    })

    it('should do nothing if the dragging is not active', () => {
        const { box_back: bb, event: event } = get_bb()
        vi.spyOn(bb, 'change_and_draw')
        bb.mouse_up_callback(event)
        expect(bb.is_dragging).toBe(false)
        expect(bb.change_and_draw).toHaveBeenCalledTimes(0)
    })
})
