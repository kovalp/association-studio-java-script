import { describe, it, expect, vi } from 'vitest'
import { get_bb } from './conftest'

describe('BoxBackend change listeners', () => {
    it('should set the position x and draw', () => {
        const { box_back: bb, event } = get_bb()
        bb.change_x(event)
        expect(bb.draw).toHaveBeenCalledTimes(1)
        expect(bb.box.xy_yaw_lw).toBeDeepCloseTo([1.23, 2.0, 3.0, 4.0, 5.0])
    })

    it('should set the position y and draw', () => {
        const { box_back: bb, event } = get_bb()
        bb.change_y(event)
        expect(bb.draw).toHaveBeenCalledTimes(1)
        expect(bb.box.xy_yaw_lw).toBeDeepCloseTo([1.0, 1.23, 3.0, 4.0, 5.0])
    })

    it('should set the box length and draw', () => {
        const { box_back: bb, event } = get_bb()
        bb.change_len(event)
        expect(bb.draw).toHaveBeenCalledTimes(1)
        expect(bb.box.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 3.0, 1.23, 5.0])
    })

    it('should set the box width and draw', () => {
        const { box_back: bb, event } = get_bb()
        bb.change_wdt(event)
        expect(bb.draw).toHaveBeenCalledTimes(1)
        expect(bb.box.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 3.0, 4.0, 1.23])
    })

    it('should set the yaw and draw', () => {
        const { box_back: bb, event } = get_bb()
        bb.change_yaw(event)
        expect(bb.draw).toHaveBeenCalledTimes(1)
        expect(bb.box.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 0.021467549726366997, 4.0, 5.0])
    })

    it('the update helper should the funct and draw', () => {
        const { box_back: bb, event } = get_bb()
        const funct = vi.fn()
        bb.update(funct)
        expect(bb.draw).toHaveBeenCalledTimes(1)
        expect(funct).toHaveBeenCalledTimes(1)
    })
})
