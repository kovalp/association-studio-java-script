import { describe, it, expect } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper calculation of data coordinates given screen coordinates', () => {
    it('should update data_xy attribute', () => {
        const bh = get_bh()
        bh.set_screen_offset(123, 456)
        expect(bh.offset_xy.x).toBeCloseTo(123.0)
        expect(bh.offset_xy.y).toBeCloseTo(456.0)
        expect(bh.data_xy.x).toBeCloseTo(4.821417482714622)
        expect(bh.data_xy.y).toBeCloseTo(8.162080522598009)
    })

})
