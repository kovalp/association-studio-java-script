import { describe, it, expect } from 'vitest'
import { get_front } from './conftest'

describe('set_state method', () => {
    it('defines the attributes', () => {
        let front = get_front()
        front.set_state(new Float32Array([1.0, 2.0, 3.0, 4.0, 5.0]))
        expect(front.panels.score_val1.textContent).toBeCloseTo(0.52548)
        expect(front.panels.score_val2.textContent).toBeCloseTo(0.04708)
    })
})
