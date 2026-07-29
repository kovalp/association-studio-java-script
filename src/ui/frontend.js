import { ToolPanels } from '@/ui/tool_panels.js'
import { BoxBackend } from '@/ui/box_backend.js'
import { ScoreDriver } from '@/metrics/score_driver.js'

class Frontend {
    /**
     * @param {ScoreDriver} score_driver
     * @param {Document | HTMLElement} root
     **/
    constructor(score_driver, root) {
        this.score_driver = score_driver
        this.ini_state = [0.5, -0.5, 0.0, 3.0, 1.5]
        const canvas_bg = root.querySelector('#stage-bg')
        this.back_bg = new BoxBackend(canvas_bg, '#00fa', score_driver.ori_state)
        const canvas_ui = root.querySelector('#stage-ui')
        this.back_ui = new BoxBackend(canvas_ui, '#f0fa', this.ini_state)
        this.panels = new ToolPanels(root)
        this.back_ui.set_change_state_callback(this.set_state.bind(this))

        this.panels.inp_x.addEventListener('change', this.back_ui.change_x.bind(this.back_ui))
        this.panels.inp_y.addEventListener('change', this.back_ui.change_y.bind(this.back_ui))
        this.panels.inp_yaw.addEventListener('change', this.back_ui.change_yaw.bind(this.back_ui))
        this.panels.inp_len.addEventListener('change', this.back_ui.change_len.bind(this.back_ui))
        this.panels.inp_wdt.addEventListener('change', this.back_ui.change_wdt.bind(this.back_ui))
        this.panels.reset_btn.addEventListener('click', () => {
            this.back_ui.set_state(this.score_driver.ori_state)
        })

        this.panels.inp_precision_pos.addEventListener('change', this.change_precision.bind(this))
        this.panels.inp_precision_yaw.addEventListener('change', this.change_precision.bind(this))
        this.panels.inp_precision_size.addEventListener('change', this.change_precision.bind(this))

        this.stage = document.getElementById('stage')
        window.addEventListener('resize', this.resize_canvas_callback.bind(this))
        this.resize_canvas_callback()
    }

    /**
     * @param {Float32Array} xy_yaw_lw
     */
    set_state(xy_yaw_lw) {
        this.panels.set_state(xy_yaw_lw)
        const { giou: giou, maha: maha } = this.score_driver.compute_for(xy_yaw_lw)
        this.panels.set_scores(giou, maha)
        this.panels.set_maha_parameters(this.score_driver.mahalanobis_score.pair)
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
}

export { Frontend }
