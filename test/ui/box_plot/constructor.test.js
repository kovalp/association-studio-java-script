import { describe, it, expect } from 'vitest'
import { BoxPlot } from '@/ui/box_plot'

describe('BoxPlot constructor', () => {
    it('should have the attributes', () => {
        const bp = new BoxPlot('red')
        expect(bp.box_style).toEqual('red')
        expect(bp.edge_style).toEqual('gray')
        expect(bp.edge_width).toEqual(0.1)
        expect(bp.moon_style).toEqual('#0f0a')
        expect(bp.moon_radius).toEqual(0.25)
        expect(bp.moon_line_width).toEqual(0.5)
    })
})
