import { describe, it, expect } from 'vitest'
import { get_menu } from './conftest.js'

describe('click listener on the button', () => {
    it('shows the items rectangle', () => {
        const { menu } = get_menu()
        let event = new PointerEvent('click')
        vi.spyOn(event, 'stopPropagation')
        menu.btn_click(event)
        expect(event.stopPropagation).toHaveBeenCalledTimes(1)
        expect(menu.main_menu_div.classList.contains('hidden')).toBe(false)
    })
})
