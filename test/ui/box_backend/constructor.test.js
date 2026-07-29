import { describe, it, expect } from 'vitest'
import { DOMPoint, CanvasRenderingContext2D } from 'canvas'
import { BoxHelper } from '@/ui/box_helper'
import { Screen } from '@/ui/screen'
import { BoxPlot } from '@/ui/box_plot'
import { get_bb } from './conftest'

describe('BoxBackend constructor', () => {
    it('should have the attributes', () => {
        const { box_back: bb, canvas: canvas } = get_bb()

        expect(bb.box).toBeInstanceOf(BoxHelper)
        expect(bb.canvas === canvas).toBe(true)
        expect(bb.ctx).toBeInstanceOf(CanvasRenderingContext2D)
        expect(bb.screen).toBeInstanceOf(Screen)
        expect(bb.box_plt).toBeInstanceOf(BoxPlot)
        expect(bb.is_dragging).toBe(false)
        expect(bb.is_in_box).toBe(false)
        expect(bb.is_in_moon).toBe(false)
        expect(bb.is_in_edge_x).toBe(false)
        expect(bb.is_in_edge_y).toBe(false)
        expect(bb.start_event).toBeInstanceOf(MouseEvent)
        expect(bb.start_data_xy).toBeInstanceOf(DOMPoint)
        expect(canvas.addEventListener).toHaveBeenCalledTimes(3)
        expect(canvas.addEventListener.mock.calls[0][0]).toBe('pointerdown')
        expect(canvas.addEventListener.mock.calls[0][1]).toBeInstanceOf(Function)

        expect(canvas.addEventListener.mock.calls[1][0]).toBe('pointermove')
        expect(canvas.addEventListener.mock.calls[1][1]).toBeInstanceOf(Function)

        expect(canvas.addEventListener.mock.calls[2][0]).toBe('pointerup')
        expect(canvas.addEventListener.mock.calls[2][1]).toBeInstanceOf(Function)
    })
})
