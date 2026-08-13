import { describe, it, expect } from 'vitest'
import { SizeSelect } from '@/ui/size_select.js'

describe('SizeSelect', () => {
    it('stores pointer and defines the onchange callback', () => {
        const select = document.createElement('select', { id: 'main-menu-ref-size' })
        select.innerHTML = `
            <option value="1x1">1 by 1</option>
            <option value="3x1.5" selected>3 by 1.5</option>
        `

        const callback = vi.fn()
        const ss = new SizeSelect(select, callback)
        expect(ss.select === select).toBe(true)
        select.value = '1x1'
        ss.select.dispatchEvent(new Event('change'))
        expect(callback).toHaveBeenCalledTimes(1)
        expect(callback).toHaveBeenCalledWith(ss.value_state_map['1x1'])
    })
})
