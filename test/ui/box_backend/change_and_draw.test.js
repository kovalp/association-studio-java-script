import { describe, it, expect } from 'vitest'
import { get_bb, get_bh } from './conftest'

describe('BoxBackend change method', () => {
    it('should call change and draw', () => {
        const { box_back: bb } = get_bb()
        vi.spyOn(bb, 'change')
        vi.spyOn(bb, 'draw')
        const bh = get_bh()
        const event = new MouseEvent('pointerdown')
        bb.change_and_draw(bh, event)
        expect(bb.change).toHaveBeenCalledWith(bh, event)
        expect(bb.draw).toHaveBeenCalledWith(bh)
    })
})
