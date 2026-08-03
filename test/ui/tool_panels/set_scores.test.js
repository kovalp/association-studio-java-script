import { describe, it, expect } from 'vitest'
import { get_tp } from './conftest'

describe('set_scores method', () => {
    it('updates the values on the score spans ', () => {
        const tp = get_tp()
        tp.set_scores(0.234, 0.456, 0.789)
        expect(tp.score_val1.textContent).toBe('0.23400')
        expect(tp.score_val2.textContent).toBe('0.45600')
        expect(tp.score_val3.textContent).toBe('0.78900')
    })
})
