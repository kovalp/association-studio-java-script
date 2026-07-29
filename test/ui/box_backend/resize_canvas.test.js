import { describe, it, expect } from 'vitest'
import { get_bb, get_bh } from './conftest'

describe('BoxBackend resize canvas method', () => {
    it('should correctly update internals and redraw ', () => {
        const { box_back: bb } = get_bb()
        bb.resize_canvas(new DOMRect(0, 0, 800, 600))
        expect(bb.canvas.width).toEqual(800)
        expect(bb.canvas.height).toEqual(600)
        // prettier-ignore
        const ref_mat = [
            -39.599700927734375, -5.644800186157227, 0,                  0,
             -5.644800186157227, 39.599700927734375, 0,                  0,
                    0,                  0,           1,                  0,
                  440,                220,           0,                  1
        ]
        expect(bb.box.transform.toFloat32Array()).toBeDeepCloseTo(ref_mat)
        expect(bb.draw).toHaveBeenCalledTimes(1)
    })
})
