import { describe, it, expect, vi } from 'vitest'
import { get_bb } from './conftest'

describe('BoxBackend upd_in_flags method', () => {
    it('should update this.box.data_xy & in flags', () => {
        const { box_back: bb, event: event } = get_bb()
        Object.assign(event, { offsetX: 123, offsetY: 456 })
        Object.assign(bb, {
            is_in_box: true,
            is_in_moon: true,
            is_in_edge_x: true,
            is_in_edge_y: true,
        })
        bb._upd_in_flags(event)
        expect(bb.box.offset_xy).toBeDeepCloseTo({ x: 123, y: 456, z: 0, w: 1 })
        expect(bb.box.data_xy).toBeDeepCloseTo({
            x: 4.821417482714622,
            y: 8.162080522598009,
            z: 0,
            w: 1,
        })
        expect(bb.is_in_box).toBe(false)
        expect(bb.is_in_moon).toBe(false)
        expect(bb.is_in_edge_x).toBe(false)
        expect(bb.is_in_edge_y).toBe(false)
    })

    it('should update this.box.data_xy & in flags', () => {
        const { box_back: bb, event: event } = get_bb()
        Object.assign(event, { offsetX: 361, offsetY: 161 })
        bb._upd_in_flags(event)
        expect(bb.box.offset_xy).toBeDeepCloseTo({ x: 361, y: 161, z: 0, w: 1 })
        const x_ref = -0.028277812616508413
        const y_ref = 0.021221812213513935
        expect(bb.box.data_xy).toBeDeepCloseTo({ x: x_ref, y: y_ref, z: 0, w: 1 })
        expect(bb.is_in_box).toBe(true)
        expect(bb.is_in_moon).toBe(false)
        expect(bb.is_in_edge_x).toBe(false)
        expect(bb.is_in_edge_y).toBe(false)
    })
})
