import { describe, it, expect } from 'vitest'
import { ScoreComputer } from '@/metrics/score_computer.js'
import { AxesIoU } from '@/metrics/axes/score.js'
import { SizeModMahaScore } from '@/metrics/size_mod/score.js'
import { MahalanobisScore } from '@/metrics/mahalanobis/score.js'

describe('constructor', () => {
    it('should define the attributes', () => {
        const sc = new ScoreComputer([0, 0, 0, 3.0, 1.5])
        expect(sc.size_mod_score).toBeInstanceOf(SizeModMahaScore)
        expect(sc.mahalanobis_score).toBeInstanceOf(MahalanobisScore)
        expect(sc.iou_score).toBeInstanceOf(AxesIoU)
        expect(sc.ref).toBeDeepCloseTo([0, 0, 0, 3, 1.5])
        expect(sc.probe).toBeDeepCloseTo([0, 0, 0, 0, 0])
        const ref_attr = { min_x: -1.5, max_x: 1.5, min_y: -0.75, max_y: 0.75, area: 4.5 }
        expect(sc.iou_score.ref).toBeDeepCloseTo(ref_attr)
        expect(sc.mahalanobis_score.ref).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
        expect(sc.size_mod_score.ref).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
    })
})
