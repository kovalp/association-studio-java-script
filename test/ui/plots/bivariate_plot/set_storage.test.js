import { describe, it, expect } from 'vitest'
import { get_bp } from './conftest.js'
import { ScoreStorage } from '@/metrics/score_storage.js'

describe('set_storage', () => {
    it('should define the attributes', () => {
        const bp = get_bp()
        const storage = new ScoreStorage()
        bp.set_storage(storage)
        expect(bp.storage === storage).toBe(true)
        expect(bp.chart.data.labels === storage.giou_scores).toBe(true)
        expect(bp.chart.data.datasets[0].data === storage.maha_scores).toBe(true)
    })
})
