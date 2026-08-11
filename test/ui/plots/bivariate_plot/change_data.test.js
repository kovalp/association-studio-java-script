import { describe, it, expect } from 'vitest'
import { get_bp } from './conftest.js'

describe('change_data', () => {
    it('updates the select element, attributes of the title and calls update()', () => {
        const bp = get_bp()
        vi.spyOn(bp, 'update')
        const title = { text: '???', color: '#???' }
        bp.change_data('smma', title, bp.select_x.options)
        expect(title.text).toEqual('SMMa')
        expect(title.color).toEqual('#fd6')
        expect(bp.select_x.options[0].disabled).toBe(false)
        expect(bp.select_x.options[1].disabled).toBe(false)
        expect(bp.select_x.options[2].disabled).toBe(true)
        expect(bp.update).toHaveBeenCalledTimes(1)
    })
})
