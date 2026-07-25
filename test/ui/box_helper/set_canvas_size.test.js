import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper canvas size setter', () => {
    it('should update attributes and update the transform', () => {
        const bh = get_bh()
        const upd_spy = vi.spyOn(bh, 'upd_transform')

        bh.set_canvas_size(800, 600)
        expect(bh.width).toBe(800)
        expect(bh.height).toBe(600)
        expect(upd_spy).toHaveBeenCalledTimes(1)
    })
})
