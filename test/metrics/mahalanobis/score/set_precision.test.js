import { describe, it, expect } from 'vitest'
import { get_score_aux } from './conftest'

describe('set_precision method', () => {
    it('should set the precision elements properly', () => {
        const sa = get_score_aux()
        sa.set_precision(1.23, 'precision-pos')
        expect(sa.pair.dia_inv_cov).toBeDeepCloseTo([1.23, 1.23, 2.0, 2.0, 1.0, 1.0])

        sa.set_precision(2.34, 'precision-yaw')
        expect(sa.pair.dia_inv_cov).toBeDeepCloseTo([1.23, 1.23, 2.34, 2.34, 1.0, 1.0])

        sa.set_precision(3.45, 'precision-size')
        expect(sa.pair.dia_inv_cov).toBeDeepCloseTo([1.23, 1.23, 2.34, 2.34, 3.45, 3.45])

        sa.set_precision(3.45, 'bogus')
        expect(sa.pair.dia_inv_cov).toBeDeepCloseTo([1.23, 1.23, 2.34, 2.34, 3.45, 3.45])
    })
})
