import { describe, it, expect, vi } from 'vitest'
import { get_bb, get_bh } from './conftest'

describe('BoxUi mouse_move callback', () => {
    it('should change this.box if dragging', () => {
        const { box_back: bb, event: event } = get_bb()
        const bh = get_bh()
        bb.box.copy = () => {
            return bh
        }
        bb.is_dragging = true
        vi.spyOn(bb, 'change_and_draw')
        bb.mouse_move_callback(event)
        expect(bb.change_and_draw).toHaveBeenCalledWith(bh, event)
    })

    it('should change the pointer to "pointer" if not dragging and in box', () => {
        const { box_back: bb, event: event } = get_bb()
        bb.is_dragging = false
        bb.mouse_move_callback(event)
        expect(event.target.style.cursor).toEqual('pointer')
    })

    it('should change the pointer to self-biting arrow if not dragging', () => {
        const { box_back: bb, event: event } = get_bb()
        bb.is_dragging = false
        bb.is_in_moon = true
        bb._upd_in_flags = vi.fn()
        bb.mouse_move_callback(event)
        expect(event.target.style.cursor.includes('svg')).toBe(true)
        expect(bb._upd_in_flags).toHaveBeenCalledTimes(1)
    })

    it('should change the pointer to all-scroll if not dragging', () => {
        const { box_back: bb, event: event } = get_bb()
        bb.is_dragging = false
        bb.is_in_edge_x = true
        bb._upd_in_flags = vi.fn()
        bb.mouse_move_callback(event)
        expect(event.target.style.cursor).toEqual('all-scroll')
        expect(bb._upd_in_flags).toHaveBeenCalledTimes(1)
    })
})
