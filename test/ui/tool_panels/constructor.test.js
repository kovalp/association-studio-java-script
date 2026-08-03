import { describe, it, expect, vi } from 'vitest'
import { get_tp } from './conftest'

describe('Constructor of the ToolPanels', () => {
    it('defines all the attributes', () => {
        const tp = get_tp()
        expect(tp.reset_btn).toBeInstanceOf(HTMLElement)
        expect(tp.score_val1).toBeInstanceOf(HTMLElement)
        expect(tp.score_val2).toBeInstanceOf(HTMLElement)
        expect(tp.score_val3).toBeInstanceOf(HTMLElement)
        expect(tp.inp_x).toBeInstanceOf(HTMLElement)
        expect(tp.inp_y).toBeInstanceOf(HTMLElement)
        expect(tp.inp_yaw).toBeInstanceOf(HTMLElement)
        expect(tp.inp_len).toBeInstanceOf(HTMLElement)
        expect(tp.inp_wdt).toBeInstanceOf(HTMLElement)
        expect(tp.explain_maha_chk_box).toBeInstanceOf(HTMLElement)
        expect(tp.explain_maha_panel).toBeInstanceOf(HTMLElement)
        expect(tp.inp_precision_pos).toBeInstanceOf(HTMLElement)
        expect(tp.inp_precision_yaw).toBeInstanceOf(HTMLElement)
        expect(tp.inp_precision_size).toBeInstanceOf(HTMLElement)
        expect(tp.sqr_pos_diff).toBeInstanceOf(HTMLElement)
        expect(tp.sqr_yaw_diff).toBeInstanceOf(HTMLElement)
        expect(tp.sqr_size_diff).toBeInstanceOf(HTMLElement)
        expect(tp.sqr_maha_dist).toBeInstanceOf(HTMLElement)

        tp.explain_maha_chk_box.click()
        expect(tp.explain_maha_panel.style.display).toBe('flex')
        tp.explain_maha_chk_box.click()
        expect(tp.explain_maha_panel.style.display).toBe('none')

        document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }))
        expect(tp.step_inp_num).toHaveBeenCalledWith(tp.inp_y, 1)
    })
})
