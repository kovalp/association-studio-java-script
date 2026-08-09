import { describe, it, expect } from 'vitest'
import { ScoreStorage } from '@/metrics/score_storage.js'

describe('constructor', () => {
    it('should define the attributes', () => {
        const ss = new ScoreStorage()
        expect(ss.sample_idx).toHaveLength(0)
        expect(ss.current_idx).toEqual(0)
        expect(ss.max_num_stored).toEqual(300)
    })
})
