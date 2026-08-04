import { ToolPanels } from '@/ui/tool_panels.js'
import { BoxBackend } from '@/ui/box_backend.js'
import { ScoreDriver } from '@/metrics/score_driver.js'
import { MainMenu } from '@/ui/main_menu.js'
import { version } from '@/../package.json'
import { add_inp_listeners } from './inp_listeners_tool_panels.js'
import { ChartDriver } from './chart_driver.js'
import { DivVisibility } from './div_visibility.js'
import { AppSettings } from '@/app_settings.js'

class Frontend {
    /**
     * @param {ScoreDriver} score_driver
     * @param {Document | HTMLElement} root
     **/
    constructor(score_driver, root) {
        this.settings = new AppSettings()
        this.chart_driver = new ChartDriver(root.querySelector('#plot-scores'))

        this.score_driver = score_driver
        this.ini_state = [0.5, -0.5, 0.0, 3.0, 1.5]
        const canvas_bg = root.querySelector('#stage-bg')
        this.back_bg = new BoxBackend(canvas_bg, '#00fa', score_driver.ori_state)
        const canvas_ui = root.querySelector('#stage-ui')
        this.back_ui = new BoxBackend(canvas_ui, '#f0fa', this.ini_state)
        this.panels = new ToolPanels(root)
        this.back_ui.set_change_state_callback(this.set_state.bind(this))

        add_inp_listeners(this.panels, this.back_ui)
        this.panels.reset_btn.addEventListener('click', this.reset.bind(this))
        this.add_inp_listeners_precision()

        this.stage = root.querySelector('#stage')
        window.addEventListener('resize', this.resize_canvas_callback.bind(this))
        this.resize_canvas_callback()
        root.querySelector('#version-number').innerHTML = version
        new MainMenu(root)
        this.chart_visibility = new DivVisibility(root, '#main-menu-chart-chk-box', '#chart-container')
        this.chart_visibility.restore_state(this.settings.is_chart_shown)
        this.chart_visibility.save_state_callback = this.settings.save_chart_visibility.bind(this.settings)
    }

    /**
     * @param {Float32Array} xy_yaw_lw
     */
    set_state(xy_yaw_lw) {
        this.panels.set_state(xy_yaw_lw)
        const { giou, maha, size_mod } = this.score_driver.compute_for(xy_yaw_lw)
        this.chart_driver.update(giou, maha, size_mod)
        this.panels.set_scores(giou, maha, size_mod)
        this.panels.set_maha_parameters(this.score_driver.mahalanobis_score.pair)
    }

    add_inp_listeners_precision() {
        const panels = this.panels
        const callback_bind = this.change_precision.bind(this)
        panels.inp_precision_pos.addEventListener('change', callback_bind)
        panels.inp_precision_yaw.addEventListener('change', callback_bind)
        panels.inp_precision_size.addEventListener('change', callback_bind)
    }

    change_precision(event) {
        this.score_driver.set_precision(Number(event.target.value), event.target.id)
        this.set_state(this.back_ui.box.xy_yaw_lw)
    }

    resize_canvas_callback() {
        const rect = this.stage.getBoundingClientRect()
        this.back_ui.resize_canvas(rect)
        this.back_bg.resize_canvas(rect)
    }

    reset() {
        this.back_ui.set_state(this.score_driver.ori_state)
    }
}

export { Frontend }
