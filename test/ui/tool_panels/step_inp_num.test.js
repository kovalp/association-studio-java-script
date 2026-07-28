import { describe, it, expect, vi } from 'vitest'
import { get_tp } from './conftest.js'

describe('step_inp_num', () => {
    function create_input(value = '1.6', step = '0.4') {
        const input = document.createElement('input')
        Object.assign(input, { type: 'number', value: value, step: step })
        return input
    }

    it('increments the value when direction is positive', () => {
        const input = create_input()
        const tp = get_tp()
        tp.step_inp_num(input, 1)
        expect(Number(input.value)).toBeCloseTo(2.0)
    })

    it('decrements the value when direction is negative', () => {
        const input = create_input()
        const tp = get_tp()
        tp.step_inp_num(input, -1)
        expect(Number(input.value)).toBeCloseTo(1.2)
    })

    it('dispatches a bubbling "change" event', () => {
        const input = create_input()
        const change_handler = vi.fn()
        input.addEventListener('change', change_handler)
        const tp = get_tp()
        tp.step_inp_num(input, 1)
        expect(change_handler).toHaveBeenCalledTimes(1)

        const event = change_handler.mock.calls[0][0]
        expect(event.type).toBe('change')
        expect(event.bubbles).toBe(true)
    })
})
