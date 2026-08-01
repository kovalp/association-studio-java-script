import { describe, it as baseIt, expect } from 'vitest'
import { MahalanobisPair } from '@/metrics/mahalanobis/pair'
import { MahalanobisBox } from '@/metrics/mahalanobis/item'

const it = baseIt.extend({
    mp: async ({}, use) => {
        const pair = new MahalanobisPair()
        await use(pair) // Pass the fixture to the test
    },

    sampleBoxes: async ({}, use) => {
        const b1 = new MahalanobisBox([1.1, 2.2, 0.5, 0.866025403785, 3.3, 4.4])
        const b2 = new MahalanobisBox([1.4, 2.3, 0.866025403785, 0.5, 3.2, 4.1])
        await use({ b1, b2 })
    },
})

describe('MahalanobisPair constructor', () => {
    it('should have the attributes', ({ mp }) => {
        expect(mp.dia_inv_cov).toBeInstanceOf(Float32Array)
        expect(mp.dia_inv_cov).toHaveLength(6)
        expect(mp.dia_inv_cov).toBeDeepCloseTo([1.5, 1.5, 2, 2, 1, 1])
        expect(mp.sqr_pos_diff).toBeCloseTo(0.0)
        expect(mp.sqr_yaw_diff).toBeCloseTo(0.0)
        expect(mp.sqr_size_diff).toBeCloseTo(0.0)
        expect(mp.sqr_maha_dist).toBeCloseTo(0.0)
    })
})

describe('MahalanobisPair get_score', () => {
    it('should compute score', ({ mp, sampleBoxes }) => {
        const { b1, b2 } = sampleBoxes
        mp.dia_inv_cov[2] = 4.0
        mp.dia_inv_cov[3] = 4.0
        mp.dia_inv_cov[4] = 2.0
        mp.dia_inv_cov[5] = 2.0
        const score = mp.get_score(b1, b2)
        expect(score).toBeCloseTo(0.8884149136054518)
    })
})
