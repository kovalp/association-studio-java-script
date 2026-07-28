import { ToolPanels } from '@/ui/tool_panels.js'
import { vi } from 'vitest'

const fixture = document.createElement('div')
fixture.innerHTML = `
            <button id="reset-btn"></button>
            <span id="score-val1">1</span>
            <span id="score-val2">2</span>
            <input id="explain-mahalanobis-chk-box" type="checkbox">
            <div id="explain-mahalanobis-panel"></div>
            <input id="inp-x" type="number">
            <input id="inp-y" type="number">
            <input id="inp-yaw" type="number">
            <input id="inp-len" type="number">
            <input id="inp-wdt" type="number">

            <input id="precision-pos" type="number">
            <input id="precision-yaw" type="number">
            <input id="precision-size" type="number">
            
            <span id="sqr-pos-diff">sqr pos diff</span>
            <span id="sqr-yaw-diff">sqr yaw diff</span>
            <span id="sqr-size-diff">sqr size diff</span>
            <span id="sqr-maha-dist">sqr maha dist</span>
`

function get_tp() {
    const tp = new ToolPanels(fixture)
    vi.spyOn(tp, 'step_inp_num')
    return tp
}

export { get_tp }
