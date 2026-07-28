import { BoxBackend } from '@/ui/box_backend.js'
import { ToolPanels } from '@/ui/tool_panels.js'
import { ScoreDriver } from '@/metrics/score_driver'

const score_driver = new ScoreDriver()

const ini_state = [0.5, -0.5, 0.0, 3.0, 1.5]
const back_bg = new BoxBackend('stage-bg', '#00fa', score_driver.ori_state)
const back_ui = new BoxBackend('stage-ui', '#f0fa', ini_state)
const tool_panels = new ToolPanels()

function set_state(xy_yaw_lw) {
    tool_panels.set_state(xy_yaw_lw)
    const {giou: giou, maha: maha} = score_driver.compute_for(xy_yaw_lw)
    tool_panels.set_scores(giou, maha)
    tool_panels.set_maha_parameters(score_driver.mahalanobis_score.pair)
}

back_ui.set_change_state_callback(set_state)

back_bg.resize_canvas_callback()
back_ui.resize_canvas_callback()

tool_panels.inp_x.addEventListener('change', back_ui.change_x.bind(back_ui))
tool_panels.inp_y.addEventListener('change', back_ui.change_y.bind(back_ui))
tool_panels.inp_yaw.addEventListener('change', back_ui.change_yaw.bind(back_ui))
tool_panels.inp_len.addEventListener('change', back_ui.change_len.bind(back_ui))
tool_panels.inp_wdt.addEventListener('change', back_ui.change_wdt.bind(back_ui))
tool_panels.reset_btn.addEventListener('click', () => {
    back_ui.set_state(score_driver.ori_state)
})

function change_mahalanobis_precision(event) {
    const t = event.target
    score_driver.set_precision(Number(t.value), t.id)
    set_state(back_ui.box.xy_yaw_lw)
}

tool_panels.inp_precision_pos.addEventListener('change', change_mahalanobis_precision)
tool_panels.inp_precision_yaw.addEventListener('change', change_mahalanobis_precision)
tool_panels.inp_precision_size.addEventListener('change', change_mahalanobis_precision)
