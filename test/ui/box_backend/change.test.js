import { describe, it, expect } from 'vitest'
import { get_bb, get_bh } from './conftest'

describe('BoxUi change method', () => {
    it('should call translate in the box helper if the pointer is in the box', () => {
        const { box_back: bb } = get_bb()
        bb.is_in_box = true
        bb.start_event = { offsetX: 10, offsetY: 20 }

        const bh = get_bh()
        bb.change(bh, { offsetX: 15, offsetY: 27 })

        expect(bh.xy_yaw_lw).toBeDeepCloseTo([1.125, 1.825, 3.0, 4.0, 5.0])
    })

    it('should not do any transformation unless in box or in moon or in edges', () => {
        const { box_back: bb } = get_bb()
        const bh = get_bh()
        bb.change(bh, { offsetX: 15, offsetY: 27 })
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 3.0, 4.0, 5.0])
    })

    it('should rotate box if the pointes is in the moon', () => {
        const { box_back: bb } = get_bb()
        bb.is_in_moon = true
        Object.assign(bb.start_data_xy, { x: 67, y: 89 })

        const bh = get_bh()
        bb.change(bh, { offsetX: 15, offsetY: 27 })
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 1.8481422662734985, 4.0, 5.0])
    })

    it('should change the box width (size-y) if the pointer is in the x edge', () => {
        const { box_back: bb } = get_bb()
        bb.is_in_edge_x = true
        bb.start_data_xy.y = 12.3

        const bh = get_bh()
        bb.change(bh, { offsetX: 123, offsetY: 456 })
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 3.0, 4.0, 13.275838851928711])
    })

    it('should change the box length (size-x) if the pointer is in the y edge', () => {
        const { box_back: bb } = get_bb()
        bb.is_in_edge_y = true
        bb.start_data_xy.x = 12.3

        const bh = get_bh()
        bb.change(bh, { offsetX: 123, offsetY: 456 })
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 3.0, 18.957164764404297, 5.0])
    })
})
