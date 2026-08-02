import { describe, it, expect } from 'vitest'
import { yaw_to_cs, yaw_to_quat } from '@/metrics/yaw_conversion.js'

describe('yaw_to_cs helper function', () => {
    it('should return correct value', async () => {
        const xy_cs_lw = new Float32Array(6)
        yaw_to_cs([1.0, 2.0, 3.0, 4.0, 5.0], xy_cs_lw)
        expect(xy_cs_lw).toBeDeepCloseTo([1, 2, -0.9899924966004454, 0.1411200080598672, 4, 5])
    })
})

describe('yaw_to_quat helper function', () => {
    it('should return correct value', async () => {
        const xy_sz_lw = new Float32Array(6)
        yaw_to_quat([1.0, 2.0, 3.0, 4.0, 5.0], xy_sz_lw)
        expect(xy_sz_lw).toBeDeepCloseTo([1, 2, 0.07073719799518585, 0.9974949955940247, 4, 5])
    })
})
