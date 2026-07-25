import { describe, it, expect } from 'vitest'
import { MahalanobisBox } from '@/metrics/mahalanobis/item.js'

describe('MahalanobisBox', () => {
    it('should initialize state correctly with Float32Array', () => {
        const box = new MahalanobisBox([1.0, 2.0, 0.25, 0.75, 3.0, 4.0])
        expect(box.xy_cs_lw).toBeDeepCloseTo([1.0, 2.0, 0.25, 0.75, 3.0, 4.0])
    })

    it('should update state in place via set_state', () => {
        const box = new MahalanobisBox([0, 0, 0, 0, 0, 0])
        const id_before = box.xy_cs_lw
        box.set_state([5.0, -2.5, 0.0, 1.0, 4.0, 2.0])
        expect(
            box.xy_cs_lw === id_before,
            'Expected an in-place update, but the xy_cs_lw got redefined.',
        ).toBe(true)
        expect(box.xy_cs_lw).toBeDeepCloseTo([5.0, -2.5, 0.0, 1.0, 4.0, 2.0])
    })
})
