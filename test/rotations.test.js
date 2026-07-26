import { get_angle } from '@/rotations'
import { describe, it, expect } from 'vitest'

describe('get_angle', () => {
    it('Should return the correct angle', () => {
        const v1 = { x: 1.0, y: 2.0 }
        const v2 = { x: 3.0, y: 4.0 }
        expect(get_angle(v1, v2)).toBeCloseTo(-0.17985349979247828)
    })
})
