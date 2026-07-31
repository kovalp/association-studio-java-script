import { describe, it, expect } from 'vitest'
import { get_menu } from './conftest.js'

describe('click listener on the root', () => {
    it('closes the items rectangle', () => {
        const { menu } = get_menu()
        menu.main_menu_div.classList.remove('hidden')
        menu.close_menu_outside_click()
        expect(menu.main_menu_div.classList.contains('hidden')).toBe(true)
    })
})
