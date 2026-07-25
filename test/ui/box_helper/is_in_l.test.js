import { describe, it, expect } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper is_in_l (within length) method', () => {
    it('checks out ', () => {
        const bh = get_bh()

        bh.data_xy.x = 1.99
        expect(bh.is_in_l()).toBe(true)

        bh.data_xy.x = 2.01
        expect(bh.is_in_l()).toBe(false);
    })
})
