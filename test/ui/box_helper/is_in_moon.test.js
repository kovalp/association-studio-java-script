import { describe, it, expect } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper is_in_moon the rotation handle element', () => {
    it('checks out', () => {
        const bh = get_bh()

        bh.data_xy.x = 2.01
        bh.data_xy.y = 0.0
        expect(bh.is_in_moon()).toBe(true)

        bh.data_xy.x = 1.99
        bh.data_xy.y = 0.0
        expect(bh.is_in_moon()).toBe(false)

        bh.data_xy.x = 2.01
        bh.data_xy.y = 1.01
        expect(bh.is_in_moon()).toBe(false)
    })
})
