import { BoxBackend } from '@/ui/box_backend.js'
import { ToolPanels } from '@/ui/tool_panels.js'

/**
 *
 * @param {ToolPanels} tool_panels
 * @param {BoxBackend} back_ui
 */
function add_inp_listeners(tool_panels, back_ui) {
    tool_panels.inp_x.addEventListener('change', back_ui.change_x.bind(back_ui))
    tool_panels.inp_y.addEventListener('change', back_ui.change_y.bind(back_ui))
    tool_panels.inp_yaw.addEventListener('change', back_ui.change_yaw.bind(back_ui))
    tool_panels.inp_len.addEventListener('change', back_ui.change_len.bind(back_ui))
    tool_panels.inp_wdt.addEventListener('change', back_ui.change_wdt.bind(back_ui))
}

export { add_inp_listeners }
