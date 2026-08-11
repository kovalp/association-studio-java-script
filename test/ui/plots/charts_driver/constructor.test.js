import { describe, it, expect } from 'vitest'
import { BivariatePlot } from '@/ui/plots/bivariate_plot.js'
import { get_cd } from './conftest.js'
import { SampleSeries } from '@/ui/plots/sample_series.js'
import { BarPlot } from '@/ui/plots/bar_plot.js'

describe('constructor', () => {
    it('defines the attributes', () => {
        const cd = get_cd()
        expect(cd.bivariate_plot).toBeInstanceOf(BivariatePlot)
        expect(cd.sample_series).toBeInstanceOf(SampleSeries)
        expect(cd.bar_plot).toBeInstanceOf(BarPlot)
        expect(cd.chart_sw.select.value).toEqual('none')
        // try definition of callbacks
        vi.spyOn(Storage.prototype, 'setItem')
        cd.chart_sw.select.value = 'line'
        cd.chart_sw.select.dispatchEvent(new Event('change'))
        expect(Storage.prototype.setItem).toHaveBeenCalledTimes(1)
        expect(Storage.prototype.setItem).toHaveBeenCalledWith('chart-type', 'line')
    })
})
