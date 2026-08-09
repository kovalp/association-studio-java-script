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
        expect(driver.max_length).toBe(300)
        expect(driver.num_upd).toBe(0)
    })
})

describe('the update method', () => {
    it('extends the arrays', () => {
        const driver = get_driver()
        driver.update(0.123, 0.456)
        expect(driver.chart.data.labels).toBeDeepCloseTo([0])
        expect(driver.chart.data.datasets[0].data).toBeDeepCloseTo([0.123])
        expect(driver.chart.data.datasets[1].data).toBeDeepCloseTo([0.456])
        expect(driver.num_upd).toBe(1)
        expect(driver.chart.update).toHaveBeenCalledTimes(1)
    })

    it('shifts arrays after they reach the max length', () => {
        const driver = get_driver()
        driver.max_length = 4
        for (let i = 0; i < 4; i++) {
            driver.update(0.123, 0.456)
            expect(driver.chart.data.labels.length).toBe(i + 1)
        }
        for (let i = 0; i < 4; i++) {
            driver.update(0.123, 0.456)
            expect(driver.chart.data.labels.length).toBe(4)
        }
    })
})

describe('the shift method', () => {
    it('removes first element of array', () => {
        const driver = get_driver()
        driver.update(0.123, 0.456)
        driver.update(0.234, 0.567)
        driver.shift()
        expect(driver.chart.data.labels).toBeDeepCloseTo([1])
        expect(driver.chart.data.datasets[0].data).toBeDeepCloseTo([0.234])
        expect(driver.chart.data.datasets[1].data).toBeDeepCloseTo([0.567])
    })
})
