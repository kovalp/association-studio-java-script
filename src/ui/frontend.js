import { ToolPanels } from '@/ui/tool_panels.js'
import { BoxUi } from '@/ui/box_ui.js'
import { ScoreDriver } from '@/metrics/score_driver.js'
import { MainMenu } from '@/ui/main_menu.js'
import { version } from '@/../package.json'
import { add_inp_listeners } from './inp_listeners_tool_panels.js'
import { AppSettings } from '@/app_settings.js'
import { ChartsDriver } from '@/ui/plots/charts_driver.js'

class Frontend {
    /**
     * @param {ScoreDriver} score_drv
     * @param {Document | HTMLElement} root
     **/
    constructor(score_drv, root) {
        this.score_drv = score_drv
        root.querySelector('#version-number').innerHTML = version

        const settings = new AppSettings()
        this.charts_driver = new ChartsDriver(root, settings)

        this.ini_state = [0.5, -0.5, 0.0, 3.0, 1.5]
        this.ref = new BoxUi(root.querySelector('#stage-bg'), '#00fa', score_drv.ori_state)
        this.probe = new BoxUi(root.querySelector('#stage-ui'), '#f0fa', this.ini_state)
        this.panels = new ToolPanels(root)
        this.probe.set_change_state_callback(this.set_state.bind(this))

        add_inp_listeners(this.panels, this.probe)
        this.panels.reset_btn.addEventListener('click', this.reset.bind(this))
        this.add_inp_listeners_precision()

        this.stage = root.querySelector('#stage')
        window.addEventListener('resize', this.resize_canvas_callback.bind(this))
        this.resize_canvas_callback()
        new MainMenu(root)
    }

    /**
     * @param {Float32Array} xy_yaw_lw
     */
    set_state(xy_yaw_lw) {
        this.panels.set_state(xy_yaw_lw)
        const { giou, maha, smma } = this.score_drv.compute_for(xy_yaw_lw)
        this.charts_driver.update(giou, maha, smma)
        this.panels.set_scores(giou, maha, smma)
        this.panels.set_maha_parameters(this.score_drv.get_maha_parameters())
    }

    add_inp_listeners_precision() {
        const panels = this.panels
        const callback_bind = this.change_precision.bind(this)
        panels.inp_precision_pos.addEventListener('change', callback_bind)
        panels.inp_precision_yaw.addEventListener('change', callback_bind)
        panels.inp_precision_size.addEventListener('change', callback_bind)
    }

    change_precision(event) {
        this.score_drv.set_precision(Number(event.target.value), event.target.id)
        this.set_state(this.probe.box.xy_yaw_lw)
    }

    resize_canvas_callback() {
        const rect = this.stage.getBoundingClientRect()
        this.probe.resize_canvas(rect)
        this.ref.resize_canvas(rect)
    }

    reset() {
        this.probe.set_state(this.score_drv.ori_state)
    }
}

export { Frontend }
