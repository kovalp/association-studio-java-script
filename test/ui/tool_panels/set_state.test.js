import { describe, it, expect } from 'vitest'
import { get_tp } from './conftest'

describe('set_state method', () => {
    it('updates the values in the state vector inputs  ', () => {
        const tp = get_tp()
        tp.set_state([0.1, 0.2, 0.3, 1.3, 1.4])
        expect(tp.inp_x.value).toBe('0.10')
        expect(tp.inp_y.value).toBe('0.20')
        expect(tp.inp_yaw.value).toBe('17')
        expect(tp.inp_len.value).toBe('1.30')
        expect(tp.inp_wdt.value).toBe('1.40')
    })
})
