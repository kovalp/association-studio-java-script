import { describe, it, expect, vi } from 'vitest'
import { get_vs } from './conftest.js'

describe('restore_state', () => {
    it('define the select value and update the style', () => {
        const vs = get_vs()
        vi.spyOn(vs, 'update_style')
        vs.restore_state('line')
        expect(vs.update_style).toHaveBeenCalledTimes(1)
        expect(vs.select.value).toBe('line')
    })
})
