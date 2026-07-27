import { describe, it, expect } from 'vitest'
import { get_bb, get_bh } from './conftest'

describe('BoxBackend draw method', () => {
    it('should clear screen and then render the box', () => {
        const { box_back: bb } = get_bb()
        const bh = get_bh()
        vi.spyOn(bb.screen, 'clear')
        vi.spyOn(bb.box_plt, 'draw')
        bb.draw(bh)
        expect(bb.screen.clear).toHaveBeenCalledTimes(1)
        expect(bb.box_plt.draw).toHaveBeenCalledWith(bb.ctx, bh)
    })

    it('should render this.box without the argument', () => {
        const { box_back: bb } = get_bb()
        vi.spyOn(bb.box_plt, 'draw')
        bb.draw()
        expect(bb.box_plt.draw).toHaveBeenCalledWith(bb.ctx, bb.box)
    })
})
