import { describe, it, expect } from 'vitest'
import { ScoreDriver } from '@/metrics/score_driver'
import { MahalanobisPair } from '@/metrics/mahalanobis/pair.js'

describe('set maha parameters', () => {
    it('gets the MahaPair object', () => {
        const sd = new ScoreDriver()
        const pp = sd.get_maha_parameters()
        expect(pp).toBeInstanceOf(MahalanobisPair)
        expect(pp === sd.computer.mahalanobis_score.pair).toBe(true)
    })
})
