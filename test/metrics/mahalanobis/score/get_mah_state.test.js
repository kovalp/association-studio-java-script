import { describe, it, expect } from 'vitest'
import { get_mah_state } from '@/metrics/mahalanobis/score.js'

describe('get_mah_state helper function', () => {
    it('should return correct value', async () => {
        const mah_state = get_mah_state([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(mah_state).toBeInstanceOf(Array)
        expect(mah_state).toBeDeepCloseTo([1, 2, -0.9899924966004454, 0.1411200080598672, 4, 5])
    })
})