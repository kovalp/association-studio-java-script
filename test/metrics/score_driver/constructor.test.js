import { describe, it, expect } from 'vitest'
import { ScoreDriver } from '@/metrics/score_driver'
import { ScoreComputer } from '@/metrics/score_computer.js'
import { ScoreStorage } from '@/metrics/score_storage.js'

describe('constructor', () => {
    it('should define the attributes', () => {
        const sd = new ScoreDriver()
        expect(sd.computer).toBeInstanceOf(ScoreComputer)
        expect(sd.storage).toBeInstanceOf(ScoreStorage)
        expect(sd.ori_state).toBeDeepCloseTo([0.0, 0.0, 0.0, 3.0, 1.5])
        const ref_attr = { min_x: -1.5, max_x: 1.5, min_y: -0.75, max_y: 0.75, area: 4.5 }
        expect(sd.computer.iou_score.ref).toBeDeepCloseTo(ref_attr)
        expect(sd.computer.mahalanobis_score.ref).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
        expect(sd.computer.size_mod_score.ref).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
    })
})
