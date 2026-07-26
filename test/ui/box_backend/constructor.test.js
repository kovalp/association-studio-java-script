import {describe, it, expect, vi, beforeEach, afterEach} from 'vitest'
import { BoxBackend } from '@/ui/box_backend'
import { createCanvas, DOMMatrix, DOMPoint, CanvasRenderingContext2D} from "canvas";
import {BoxHelper} from "@/ui/box_helper";
import {Screen} from "@/ui/screen";
import {BoxPlot} from "@/ui/box_plot";


describe('BoxBackend constructor', () => {
    beforeEach(() => {
        vi.stubGlobal('DOMMatrix', DOMMatrix)
        vi.stubGlobal('DOMPoint', DOMPoint)
    })

    afterEach(() => {
        vi.unstubAllGlobals()
    })

    it('should have the attributes', () => {

        const canvas = createCanvas(640, 480)
        const stage = document.createElement("div")
        canvas.addEventListener = vi.fn()
        vi.spyOn(document, 'getElementById').mockImplementation((id) => {
            if (id === 'canvas-ui') {
                return canvas
            } else if (id === 'stage') {
                return stage
            } else {
                return null
            }
        })

        vi.spyOn(window, "addEventListener")
        const bb = new BoxBackend('canvas-ui', 'red', [1.0, 2.0, 3.0, 4.0, 5.0])

        expect(bb.box).toBeInstanceOf(BoxHelper)
        expect(bb.canvas === canvas).toBe(true)
        expect(bb.ctx).toBeInstanceOf(CanvasRenderingContext2D)
        expect(bb.stage === stage).toBe(true)
        expect(bb.screen).toBeInstanceOf(Screen)
        expect(bb.box_plt).toBeInstanceOf(BoxPlot)
        expect(bb.is_dragging).toBe(false)
        expect(bb.is_in_box).toBe(false)
        expect(bb.is_in_moon).toBe(false)
        expect(bb.is_in_edge_x).toBe(false)
        expect(bb.is_in_edge_y).toBe(false)
        expect(bb.start_event).toBeInstanceOf(MouseEvent)
        expect(bb.start_data_xy).toBeInstanceOf(DOMPoint)
        expect(window.addEventListener).toHaveBeenCalled()
        expect(canvas.addEventListener).toHaveBeenCalledTimes(3)
        expect(canvas.addEventListener.mock.calls[0][0]).toBe("pointerdown")
        expect(canvas.addEventListener.mock.calls[0][1]).toBeInstanceOf(Function)

        expect(canvas.addEventListener.mock.calls[1][0]).toBe("pointermove")
        expect(canvas.addEventListener.mock.calls[1][1]).toBeInstanceOf(Function)

        expect(canvas.addEventListener.mock.calls[2][0]).toBe("pointerup")
        expect(canvas.addEventListener.mock.calls[2][1]).toBeInstanceOf(Function)

    })
})
