import { describe, it, expect } from 'vitest'
import { BoxBackend } from '@/ui/box_backend'
import { get_front } from './conftest'
import { ScoreDriver } from '@/metrics/score_driver.js'
import { ToolPanels } from '@/ui/tool_panels.js'

/**
 *
 * @param {HTMLInputElement} inp
 * @param {number} value
 */
function change_and_dispatch(inp, value) {
    inp.value = String(value)
    inp.dispatchEvent(new Event('change'))
}

describe('constructor', () => {
    it('defines the attributes', () => {
        let front = get_front()
        expect(front.score_driver).toBeInstanceOf(ScoreDriver)
        expect(front.ini_state).toBeDeepCloseTo([0.5, -0.5, 0.0, 3.0, 1.5])
        expect(front.back_bg).toBeInstanceOf(BoxBackend)
        expect(front.back_ui).toBeInstanceOf(BoxBackend)
        expect(front.panels).toBeInstanceOf(ToolPanels)
        front.back_ui.box.set_state([1.0, 2.0, 3.0, 4.0, 5.67])
        expect(front.panels.inp_wdt.value).toBeCloseTo(5.67)

        change_and_dispatch(front.panels.inp_x, 1.22333)
        expect(front.back_ui.box.xy_yaw_lw).toBeDeepCloseTo([1.22333, 2, 3, 4, 5.67])

        change_and_dispatch(front.panels.inp_y, 2.34)
        expect(front.back_ui.box.xy_yaw_lw).toBeDeepCloseTo([1.22333, 2.34, 3, 4, 5.67])

        change_and_dispatch(front.panels.inp_yaw, 90)
        expect(front.back_ui.box.xy_yaw_lw).toBeDeepCloseTo([1.22333, 2.34, 1.57, 4, 5.67])

        change_and_dispatch(front.panels.inp_len, 4.56)
        expect(front.back_ui.box.xy_yaw_lw).toBeDeepCloseTo([1.22333, 2.34, 1.57, 4.56, 5.67])

        change_and_dispatch(front.panels.inp_wdt, 2.56)
        expect(front.back_ui.box.xy_yaw_lw).toBeDeepCloseTo([1.22333, 2.34, 1.57, 4.56, 2.56])

        front.panels.reset_btn.click()
        expect(front.back_ui.box.xy_yaw_lw).toBeDeepCloseTo([0.0, 0.0, 0.0, 3.0, 1.5])

        change_and_dispatch(front.panels.inp_precision_pos, 2.34)
        expect(front.score_driver.mahalanobis_score.pair.dia_inv_cov).toBeDeepCloseTo([
            2.34, 2.34, 4, 4, 1, 1,
        ])

        change_and_dispatch(front.panels.inp_precision_yaw, 2.0)
        expect(front.score_driver.mahalanobis_score.pair.dia_inv_cov).toBeDeepCloseTo([
            2.34, 2.34, 2, 2, 1, 1,
        ])

        change_and_dispatch(front.panels.inp_precision_size, 3.0)
        expect(front.score_driver.mahalanobis_score.pair.dia_inv_cov).toBeDeepCloseTo([
            2.34, 2.34, 2, 2, 3, 3,
        ])

        expect(front.stage).toBeInstanceOf(HTMLDivElement)
        front.stage.getBoundingClientRect = () => {
            return new DOMRect(0, 0, 800, 600)
        }
        window.dispatchEvent(new Event('resize'))
        expect(front.back_ui.box.transform.m41).toBeCloseTo(400)
        expect(front.back_ui.box.transform.m42).toBeCloseTo(300)
    })
})
