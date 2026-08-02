import { describe, it, expect } from 'vitest'
import { SizeModMahaPair } from '@/metrics/size_mod/pair'
import { yaw_to_quat } from '@/metrics/yaw_conversion.js'

describe('constructor', () => {
    it('should have the attributes', ({}) => {
        const smp = new SizeModMahaPair()
        expect(smp.precision).toBeInstanceOf(Float32Array)
        expect(smp.precision.length).toEqual(5)
        expect(smp.sqr_diff).toBeInstanceOf(Float32Array)
        expect(smp.sqr_diff.length).toEqual(5)
        expect(smp.sqr_maha_dist).toBeCloseTo(0.0)
        expect(smp.scale_xy).toBeInstanceOf(Float32Array)
        expect(smp.scale_xy.length).toEqual(2)
    })
})

describe('get_score method', () => {
    it('should compute score', () => {
        const smp = new SizeModMahaPair()
        const b1 = new Float32Array(6)
        const b2 = new Float32Array(6)
        yaw_to_quat([0.0, 0.0, 0.0, 3.0, 1.5], b1)
        yaw_to_quat([1.0, 2.0, 1.5, 2.0, 1.0], b2)
        const score = smp.get_score(b1, b2)
        expect(score).toBeCloseTo(0.4223681543044018)
    })
})
