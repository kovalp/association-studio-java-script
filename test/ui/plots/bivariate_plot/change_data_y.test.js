import { describe, it, expect } from 'vitest'
import { get_bp } from './conftest.js'

describe('change_data_y', () => {
    it('should set pointer and call attribute updates', () => {
        const bp = get_bp()
        vi.spyOn(bp, 'change_data')
        bp.select_y.value = 'smma'
        bp.select_y.dispatchEvent(new Event('change'))
        expect(bp.chart.data.datasets[0].data === bp.storage.smma_scores).toBe(true)
        expect(bp.chart.data.datasets[0].borderColor).toEqual('#fd6')
        expect(bp.change_data).toHaveBeenCalledTimes(1)
        expect(bp.change_data).toHaveBeenCalledWith(
            'smma',
            bp.chart.options.scales.y.title,
            bp.select_x.options,
        )
    })
})
