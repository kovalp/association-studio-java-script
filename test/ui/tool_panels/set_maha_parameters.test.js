import { describe, it, expect } from 'vitest'
import { get_tp } from './conftest'

describe('set_maha_parameters method', () => {
    it('updates the values on the score spans ', () => {
        const tp = get_tp()
        tp.set_maha_parameters({
            sqr_pos_diff: 1.0,
            sqr_yaw_diff: 2.0,
            sqr_size_diff: 3.0,
            sqr_maha_dist: 4.0,
        })
        expect(tp.sqr_pos_diff.textContent).toBe('1.00')
        expect(tp.sqr_yaw_diff.textContent).toBe('2.00')
        expect(tp.sqr_size_diff.textContent).toBe('3.00')
        expect(tp.sqr_maha_dist.textContent).toBe('4.000')
    })
})
