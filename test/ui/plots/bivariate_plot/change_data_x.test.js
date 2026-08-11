import { describe, it, expect } from 'vitest'
import { get_bp } from './conftest.js'

describe('change_data_x', () => {
    it('should set pointer and call attribute updates', () => {
        const bp = get_bp()
        vi.spyOn(bp, 'change_data')
        bp.select_x.value = 'smma'
        bp.select_x.dispatchEvent(new Event('change'))
        expect(bp.chart.data.labels === bp.storage.smma_scores).toBe(true)
        expect(bp.chart.data.datasets[0].backgroundColor).toEqual('#fd6')
        expect(bp.change_data).toHaveBeenCalledTimes(1)
        expect(bp.change_data).toHaveBeenCalledWith(
            'smma',
            bp.chart.options.scales.x.title,
            bp.select_y.options,
        )
    })
})
