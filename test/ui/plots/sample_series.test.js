import { describe, it, expect, vi } from 'vitest'
import { SampleSeries } from '@/ui/plots/sample_series.js'
import Chart from 'chart.js/auto'
import {ScoreStorage} from "@/metrics/score_storage.js";

function get_driver() {
    const driver = new SampleSeries(document.createElement('canvas'))
    vi.spyOn(driver.chart, 'update')
    return driver
}

describe('SampleSeries constructor', () => {
    it('should define the attributes', () => {
        const driver = get_driver()
        expect(driver.chart).toBeInstanceOf(Chart)
    })
})

describe('the update method', () => {
    it('extends the arrays', () => {
        const driver = get_driver()
        driver.update()
        expect(driver.chart.update).toHaveBeenCalledWith('none')
    })
})

describe('the set_storage method', () => {
    it('correctly define pointers', () => {
        const ssd = get_driver()
        const storage = new ScoreStorage()
        ssd.set_storage(storage)
        const data = ssd.chart.data
        expect(data.labels === storage.sample_idx).toBe(true)
        expect(data.datasets[0].data === storage.giou_scores).toBe(true)
        expect(data.datasets[1].data === storage.maha_scores).toBe(true)
        expect(data.datasets[2].data === storage.smma_scores).toBe(true)

    })
})
