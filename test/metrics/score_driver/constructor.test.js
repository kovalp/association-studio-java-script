import { describe, it, expect } from 'vitest'
import { ScoreDriver } from '@/metrics/score_driver'
import { ScoreComputer } from '@/metrics/score_computer.js'
import { ScoreStorage } from '@/metrics/score_storage.js'

describe('constructor', () => {
    it('should define the attributes', () => {
        const sd = new ScoreDriver()
        expect(sd.computer).toBeInstanceOf(ScoreComputer)
        expect(sd.storage).toBeInstanceOf(ScoreStorage)
        expect(sd.ori_state).toBeDeepCloseTo([0, 0, 0, 3, 1.5])
        expect(sd.computer.ref).toBeDeepCloseTo([0, 0, 0, 3, 1.5])
    })
})
