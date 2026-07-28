import { describe, it, expect } from 'vitest'
import { get_tp } from './conftest'

describe('listener of the explanatory panel show/hide', () => {
    it('flips the visibility of the panel', () => {
        const tp = get_tp()
        tp.handle_maha_panel_show({ target: { checked: true } })
        expect(tp.explain_maha_panel.style.display).toBe('flex')
        tp.handle_maha_panel_show({ target: { checked: false } })
        expect(tp.explain_maha_panel.style.display).toBe('none')
    })
})
