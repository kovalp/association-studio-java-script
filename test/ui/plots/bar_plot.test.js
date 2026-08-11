import { describe, it, expect, vi } from 'vitest'
import { BarPlot } from '@/ui/plots/bar_plot.js'
import Chart from 'chart.js/auto'
import { ScoreStorage } from '@/metrics/score_storage.js'

function get_bp() {
    const bp = new BarPlot(document.createElement('canvas'))
    vi.spyOn(bp.chart, 'update')
    return bp
}

describe('SampleSeries constructor', () => {
    it('should define the attributes', () => {
        const bp = get_bp()
        expect(bp.chart).toBeInstanceOf(Chart)
    })
})

describe('the update method', () => {
    it('redefine the data with last calculated values', () => {
        const bp = get_bp()
        bp.storage.giou_scores.push(0.123)
        bp.storage.maha_scores.push(0.456)
        bp.storage.smma_scores.push(0.789)
        bp.update()
        expect(bp.chart.data.datasets[0].data).toBeDeepCloseTo([0.123, 0.456, 0.789])
        expect(bp.chart.update).toHaveBeenCalledWith('none')
    })
})

describe('the set_storage method', () => {
    it('correctly define pointers', () => {
        const bp = get_bp()
        const storage = new ScoreStorage()
        bp.set_storage(storage)
        expect(bp.storage === storage).toBe(true)
    })
})
