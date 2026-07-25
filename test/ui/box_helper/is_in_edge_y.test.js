import { describe, it, expect } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper is_in_edge_y the scale handle element', () => {
    it('checks out', () => {
        const bh = get_bh()

        bh.data_xy.y = 2.49
        bh.data_xy.x = -2.01
        expect(bh.is_in_edge_y()).toBe(true)

        bh.data_xy.y = 2.51
        bh.data_xy.x = -2.01
        expect(bh.is_in_edge_y()).toBe(false)

        bh.data_xy.x = 2.49
        bh.data_xy.y = -2.36
        expect(bh.is_in_edge_y()).toBe(false)

    })
})
