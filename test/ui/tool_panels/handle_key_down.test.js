import { describe, it, expect, vi } from 'vitest'
import { get_tp } from './conftest'

describe('listener of the keystrokes', () => {
    it('arrow keys are not effecting if not body', () => {
        const tp = get_tp()
        tp.handle_key_down({ key: 'ArrowLeft', target: { tagName: 'PANEL' } })
        expect(tp.step_inp_num).toHaveBeenCalledTimes(0)
    })

    it('input numbers change position depending on the key', () => {
        const tp = get_tp()

        tp.handle_key_down({ key: 'ArrowUp', target: { tagName: 'BODY' } })
        expect(tp.step_inp_num).toHaveBeenCalledWith(tp.inp_y, 1)

        vi.resetAllMocks()
        tp.handle_key_down({ key: 'ArrowDown', target: { tagName: 'BODY' } })
        expect(tp.step_inp_num).toHaveBeenCalledWith(tp.inp_y, -1)

        vi.resetAllMocks()
        tp.handle_key_down({ key: 'ArrowRight', target: { tagName: 'BODY' } })
        expect(tp.step_inp_num).toHaveBeenCalledWith(tp.inp_x, 1)

        vi.resetAllMocks()
        tp.handle_key_down({ key: 'ArrowLeft', target: { tagName: 'BODY' } })
        expect(tp.step_inp_num).toHaveBeenCalledWith(tp.inp_x, -1)
    })

    it('input numbers change size depending on the key', () => {
        const tp = get_tp()

        tp.handle_key_down({ key: 'ArrowUp', target: { tagName: 'BODY' }, ctrlKey: true })
        expect(tp.step_inp_num).toHaveBeenCalledWith(tp.inp_wdt, 1)

        vi.resetAllMocks()
        tp.handle_key_down({ key: 'ArrowDown', target: { tagName: 'BODY' }, ctrlKey: true })
        expect(tp.step_inp_num).toHaveBeenCalledWith(tp.inp_wdt, -1)

        vi.resetAllMocks()
        tp.handle_key_down({ key: 'ArrowRight', target: { tagName: 'BODY' }, ctrlKey: true })
        expect(tp.step_inp_num).toHaveBeenCalledWith(tp.inp_len, 1)

        vi.resetAllMocks()
        tp.handle_key_down({ key: 'ArrowLeft', target: { tagName: 'BODY' }, ctrlKey: true })
        expect(tp.step_inp_num).toHaveBeenCalledWith(tp.inp_len, -1)
    })

    it('clicks the reset button upon keystroke "r"', () => {
        const tp = get_tp()
        vi.spyOn(tp.reset_btn, 'click')
        tp.handle_key_down({ key: 'r' })
        expect(tp.reset_btn.click).toHaveBeenCalledTimes(1)
    })
})
