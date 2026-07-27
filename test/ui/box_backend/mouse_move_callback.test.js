import { describe, it, expect } from 'vitest'
import { get_bb, get_bh } from './conftest'

describe('BoxBackend mouse_move callback', () => {
    it('should change this.box if dragging', () => {
        const { box_back: bb } = get_bb()
        const bh = get_bh()
        bb.box.copy = () => {
            return bh
        }
        bb.is_dragging = true
        vi.spyOn(bb, 'change_and_draw')
        const event = { offsetX: 12, offsetY: 34 }
        bb.mouse_move_callback(event)
        expect(bb.change_and_draw).toHaveBeenCalledWith(bh, event)
    })

    it('should change the pointer if not dragging', () => {
        const { box_back: bb } = get_bb()
        bb.is_dragging = false
        const event = { offsetX: 360, offsetY: 160, target: { style: { cursor: '' } } }
        bb.mouse_move_callback(event)
        expect(event.target.style.cursor).toEqual('pointer')
    })
})
