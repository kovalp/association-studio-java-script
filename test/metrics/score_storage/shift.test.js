import { describe, it, expect } from 'vitest'
import { ScoreStorage } from '@/metrics/score_storage.js'

describe('shift', () => {
    it('should remove first element from all arrays', () => {
        const ss = new ScoreStorage()
        ss.sample_idx = new Array(0, 1)
        ss.giou_scores = new Array(0, 1)
        ss.maha_scores = new Array(0, 1)
        ss.smma_scores = new Array(0, 1)
        ss.ref_states.push([4.1, 5.1, 6.1, 7.1, 8.1])
        ss.ref_states.push([4.2, 5.2, 6.2, 7.2, 8.2])
        ss.prb_states.push([1.1, 2.1, 3.1, 4.1, 5.1])
        ss.prb_states.push([1.2, 2.2, 3.2, 4.2, 5.2])
        ss.shift()
        expect(ss.sample_idx).toBeDeepCloseTo([1])
        expect(ss.giou_scores).toBeDeepCloseTo([1])
        expect(ss.maha_scores).toBeDeepCloseTo([1])
        expect(ss.smma_scores).toBeDeepCloseTo([1])
        expect(ss.ref_states).toHaveLength(1)
        expect(ss.ref_states[0]).toBeDeepCloseTo([4.2, 5.2, 6.2, 7.2, 8.2])
        expect(ss.prb_states).toHaveLength(1)
        expect(ss.prb_states[0]).toBeDeepCloseTo([1.2, 2.2, 3.2, 4.2, 5.2])
    })
})
