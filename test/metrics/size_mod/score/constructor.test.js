import { describe, it, expect } from 'vitest'
import { SizeModMahaPair } from '@/metrics/size_mod/pair.js'
import { SizeModMahaScore } from '@/metrics/size_mod/score.js'

describe('constructor', () => {
    it('should have the attributes', () => {
        const sa = new SizeModMahaScore()
        expect(sa.pair).toBeInstanceOf(SizeModMahaPair)
        expect(sa.probe).toBeInstanceOf(Float32Array)
        expect(sa.ref).toBeInstanceOf(Float32Array)
        expect(sa.ref).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3, 1.5])
        expect(sa.probe).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3, 1.5])
    })
})

describe('set_ref method', () => {
    it('should define ref', () => {
        const sa = new SizeModMahaScore()
        sa.set_ref([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(sa.ref).toBeDeepCloseTo([1.0, 2.0, 0.07073719799518585, 0.9974949955940247, 4, 5])
        expect(sa.probe).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3, 1.5])
    })
})

describe('compute_for method', () => {
    it('should define probe and compute the score', () => {
        const sa = new SizeModMahaScore()
        const score = sa.compute_for([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(sa.ref).toBeDeepCloseTo([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
        expect(sa.probe).toBeDeepCloseTo([
            1.0, 2.0, 0.07073719799518585, 0.9974949955940247, 4.0, 5.0,
        ])
        expect(score).toBeCloseTo(0.524510132808655)
    })
})
