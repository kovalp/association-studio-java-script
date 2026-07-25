import { describe, it, expect } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper is_in_edge_x the scale handle element', () => {
    it('checks out', () => {
        const bh = get_bh()

        bh.data_xy.x = 1.99
        bh.data_xy.y = -2.51
        expect(bh.is_in_edge_x()).toBe(true)

        bh.data_xy.x = 2.01
        bh.data_xy.y = -2.51
        expect(bh.is_in_edge_x()).toBe(false)

        bh.data_xy.x = 1.99
        bh.data_xy.y = -2.86
        expect(bh.is_in_edge_x()).toBe(false)
    })
})
