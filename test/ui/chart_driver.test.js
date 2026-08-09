import { describe, it, expect, vi } from 'vitest'
import { SampleSeries } from '@/ui/plots/sample_series.js'
import Chart from 'chart.js/auto'

function get_driver() {
    const canvas = document.createElement('canvas')
    const driver = new SampleSeries(canvas)
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
