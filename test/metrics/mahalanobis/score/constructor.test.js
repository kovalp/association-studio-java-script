import { describe, it, expect } from 'vitest'
import { get_score_aux } from './conftest.js'
import { MahalanobisPair } from '@/metrics/mahalanobis/pair.js'

describe('constructor', () => {
    it('should have the attributes', () => {
        const sa = get_score_aux()
        expect(sa.pair).toBeInstanceOf(MahalanobisPair)
        expect(sa.probe).toBeInstanceOf(Float32Array)
        expect(sa.ref).toBeInstanceOf(Float32Array)
        expect(sa.ref).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3, 1.5])
        expect(sa.probe).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3, 1.5])
    })
})
