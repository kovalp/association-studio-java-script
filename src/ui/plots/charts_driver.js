import { ScoreStorage } from '@/metrics/score_storage.js'
import { SampleSeries } from '@/ui/plots/sample_series.js'
import { BivariatePlot } from '@/ui/plots/bivariate_plot.js'
import { BarPlot } from '@/ui/plots/bar_plot.js'
import { VisibilitySwitch } from '@/ui/visibility_switch.js'
import { AppSettings } from '@/app_settings.js'

class ChartsDriver {
    /**
     *
     * @param {HTMLElement | Document} root
     * @param {AppSettings} settings
     */
    constructor(root, settings) {
        this.bar_plot = new BarPlot(root.querySelector('#bar-scores'))
        this.sample_series = new SampleSeries(root.querySelector('#plot-scores'))
        this.bivariate_plot = new BivariatePlot(
            root,
            '#scatter-scores',
            '#select-data-x',
            '#select-data-y',
        )
        this.chart_sw = new VisibilitySwitch(root, '#main-menu-chart-type', {
            none: '#does-not-exist',
            line: '#chart-container',
            scatter: '#scatter-container',
            bar: '#bar-container',
        })
        this.chart_sw.restore_state(settings.chart_type)
        this.chart_sw.save_state_callback = settings.save_chart_type.bind(settings)
    }

    /**
     *
     * @param {ScoreStorage} storage
     */
    set_storage(storage) {
        this.sample_series.set_storage(storage)
        this.bivariate_plot.set_storage(storage)
        this.bar_plot.set_storage(storage)
    }

    update() {
        this.bivariate_plot.update()
        this.sample_series.update()
        this.bar_plot.update()
    }
}

export { ChartsDriver }
