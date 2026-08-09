import { describe, it, expect } from 'vitest'
import { get_bb } from './conftest'

describe('BoxUi mouse_down callback', () => {
    it('should calculate the in-box flag and start dragging', () => {
        const { box_back: bb } = get_bb()
        expect(bb.is_dragging).toBe(false)
        const event = { offsetX: 360, offsetY: 160 }
        bb.mouse_down_callback(event)
        expect(bb.box.offset_xy).toBeDeepCloseTo({ x: 360, y: 160, w: 1, z: 0 })
        expect(bb.box.data_xy).toBeDeepCloseTo({ x: 0, y: 0, w: 1, z: 0 })
        expect(bb.is_in_box).toBe(true)
        expect(bb.is_in_moon).toBe(false)
        expect(bb.is_in_edge_x).toBe(false)
        expect(bb.is_in_edge_y).toBe(false)
        expect(bb.is_dragging).toBe(true)
        expect(bb.start_event === event).toBe(true)
        expect(bb.start_data_xy).toBeDeepCloseTo({ x: 0, y: 0, w: 1, z: 0 })
    })

    it('should calculate the in-moon flag and start dragging', () => {
        const { box_back: bb } = get_bb()
        const event = { offsetX: 360, offsetY: 160 }
        bb._upd_in_flags = vi.fn()
        bb.is_in_moon = true
        Object.assign(bb.box.data_xy, { x: 123, y: 456 })
        bb.mouse_down_callback(event)
        expect(bb._upd_in_flags).toHaveBeenCalledTimes(1)
        expect(bb.is_dragging).toBe(true)
        expect(bb.start_event === event).toBe(true)
        expect(bb.start_data_xy).toBeDeepCloseTo({ x: 123, y: 456, w: 1, z: 0 })
    })

    it('should calculate the in-edge-x flag and start dragging', () => {
        const { box_back: bb } = get_bb()
        const event = { offsetX: 360, offsetY: 160 }
        bb._upd_in_flags = vi.fn()
        bb.is_in_edge_x = true
        Object.assign(bb.box.data_xy, { x: 123, y: 456 })
        bb.mouse_down_callback(event)
        expect(bb._upd_in_flags).toHaveBeenCalledTimes(1)
        expect(bb.is_dragging).toBe(true)
    })

    it('should calculate the in-edge-y flag and start dragging', () => {
        const { box_back: bb } = get_bb()
        const event = { offsetX: 360, offsetY: 160 }
        bb._upd_in_flags = vi.fn()
        bb.is_in_edge_y = true
        Object.assign(bb.box.data_xy, { x: 123, y: 456 })
        bb.mouse_down_callback(event)
        expect(bb._upd_in_flags).toHaveBeenCalledTimes(1)
        expect(bb.is_dragging).toBe(true)
    })

    it('should not start dragging if the pointer is far away from the box', () => {
        const { box_back: bb } = get_bb()
        bb.mouse_down_callback({ offsetX: 30, offsetY: 160 })
        expect(bb.is_dragging).toBe(false)
    })
})
