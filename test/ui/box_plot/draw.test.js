import { describe, it, expect } from 'vitest'
import { createCanvas, DOMMatrix } from 'canvas'
import { BboxPlot } from '@/ui/box_plot'

describe('the BoxPlot draw method', () => {
    it('should plot the rectangle', async () => {
        const canvas = createCanvas(640, 480)
        const ctx = canvas.getContext('2d')
        const bp = new BboxPlot('red')
        const transform = new DOMMatrix([1, 0, 0, 1, 0, 0])
        transform.translateSelf(320, 240)
        transform.scaleSelf(20, -20)
        transform.translateSelf(1.0, 2.0)
        transform.rotateSelf((180 * 1.5) / Math.PI)
        const box_hlp = {
            transform: transform,
            xy_yaw_lw: new Float32Array([1.0, 2.0, 1.5, 4.0, 1.6]),
            half_sxy: new Float32Array([2.0, 0.8]),
        }
        bp.draw(ctx, box_hlp)
        const image = ctx.getImageData(0, 0, 640, 480)
        let image_sum = 0
        for (const e of image.data) image_sum += e
        expect(image_sum).toBe(1540606)
    })
})
