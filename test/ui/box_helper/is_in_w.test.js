import { describe, it, expect } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper is_in_w (within width) method', () => {
    it('checks out', () => {
        const bh = get_bh()

        bh.data_xy.y = 2.49
        expect(bh.is_in_w()).toBe(true)

        bh.data_xy.y = 2.51
        expect(bh.is_in_w()).toBe(false)
    })
})
