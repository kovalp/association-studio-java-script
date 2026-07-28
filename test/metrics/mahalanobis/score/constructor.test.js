import { describe, it, expect } from 'vitest'
import { get_score_aux } from './conftest.js'
import { MahalanobisBox } from '@/metrics/mahalanobis/item.js'
import { MahalanobisPair } from '@/metrics/mahalanobis/pair.js'


describe('constructor', () => {
    it('should have the attributes', () => {
        const sa = get_score_aux()
        expect(sa.pair).toBeInstanceOf(MahalanobisPair)
        expect(sa.probe).toBeInstanceOf(MahalanobisBox)
        expect(sa.ref).toBeInstanceOf(MahalanobisBox)
        expect(sa.ref.xy_cs_lw).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3, 1.5])
        expect(sa.probe.xy_cs_lw).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3, 1.5])
    })
})