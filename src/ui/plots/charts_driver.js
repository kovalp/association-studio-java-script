import { SampleSeries } from '@/ui/plots/sample_series.js'
import { BivariatePlot } from '@/ui/plots/bivariate_plot.js'
import { VisibilitySwitch } from '@/ui/visibility_switch.js'
import { AppSettings } from '@/app_settings.js'

class ChartsDriver {
    /**
     *
     * @param {HTMLElement | Document} root
     * @param {AppSettings} settings
     */
    constructor(root, settings) {
        this.sample_series = new SampleSeries(root.querySelector('#plot-scores'))
        this.bivariate_plot = new BivariatePlot(root.querySelector('#scatter-scores'))
        this.chart_sw = new VisibilitySwitch(root, '#main-menu-chart-type', {
            none: '#does-not-exist',
            line: '#chart-container',
            scatter: '#scatter-container',
        })
        this.chart_sw.restore_state(settings.chart_type)
        this.chart_sw.save_state_callback = settings.save_chart_type.bind(settings)
    }

    /**
     *
     * @param {Number} giou
     * @param {Number} maha
     * @param {Number} smma
     */
    update(giou, maha, smma) {
        this.bivariate_plot.update(giou, maha)
        this.sample_series.update(giou, maha, smma)
    }
}

export { ChartsDriver }
