import { describe, it, expect } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper scale method', () => {
    it('should divide by the transform_scale factor', () => {
        const bh = get_bh()
        expect(bh.scale(1.234)).toBeCloseTo(1.234 / 40.0)
    })
})
