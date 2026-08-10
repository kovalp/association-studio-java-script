import { describe, it, expect } from 'vitest'
import { ScoreStorage } from '@/metrics/score_storage.js'

describe('store', () => {
    it('should add copies', () => {
        const ss = new ScoreStorage()
        ss.store([1, 2, 3, 4, 5], [5, 6, 7, 8, 9], { giou: 0.45, maha: 0.67, smma: 0.89 })
        expect(ss.sample_idx).toBeDeepCloseTo([0])
        expect(ss.current_idx).toBe(1)
        expect(ss.ref_states).toBeDeepCloseTo([[1, 2, 3, 4, 5]])
        expect(ss.prb_states).toBeDeepCloseTo([[5, 6, 7, 8, 9]])
        expect(ss.ref_states[0]).toBeInstanceOf(Float32Array)
        expect(ss.prb_states[0]).toBeInstanceOf(Float32Array)
        expect(ss.giou_scores).toBeDeepCloseTo([0.45])
        expect(ss.maha_scores).toBeDeepCloseTo([0.67])
        expect(ss.smma_scores).toBeDeepCloseTo([0.89])

        ss.store([2, 2, 2, 2, 2], [3, 3, 3, 3, 3], { giou: 0.12, maha: 0.34, smma: 0.56 })
        expect(ss.sample_idx).toBeDeepCloseTo([0, 1])
        expect(ss.current_idx).toBe(2)
        expect(ss.ref_states).toBeDeepCloseTo([
            [1, 2, 3, 4, 5],
            [2, 2, 2, 2, 2],
        ])
        expect(ss.prb_states).toBeDeepCloseTo([
            [5, 6, 7, 8, 9],
            [3, 3, 3, 3, 3],
        ])
        expect(ss.giou_scores).toBeDeepCloseTo([0.45, 0.12])
        expect(ss.maha_scores).toBeDeepCloseTo([0.67, 0.34])
        expect(ss.smma_scores).toBeDeepCloseTo([0.89, 0.56])
    })

    it('should have keep only last elements when too big', () => {
        const ss = new ScoreStorage()
        ss.max_num_stored = 1
        ss.store([1, 2, 3, 4, 5], [5, 6, 7, 8, 9], { giou: 0.45, maha: 0.67, smma: 0.89 })
        ss.store([2, 2, 2, 2, 2], [3, 3, 3, 3, 3], { giou: 0.12, maha: 0.34, smma: 0.56 })
        expect(ss.sample_idx).toBeDeepCloseTo([1])
        expect(ss.current_idx).toBe(2)
        expect(ss.ref_states).toBeDeepCloseTo([[2, 2, 2, 2, 2]])
        expect(ss.prb_states).toBeDeepCloseTo([[3, 3, 3, 3, 3]])
        expect(ss.giou_scores).toBeDeepCloseTo([0.12])
        expect(ss.maha_scores).toBeDeepCloseTo([0.34])
        expect(ss.smma_scores).toBeDeepCloseTo([0.56])
    })
})
