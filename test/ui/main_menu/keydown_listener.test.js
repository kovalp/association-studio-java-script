import { describe, it, expect } from 'vitest'
import { get_menu } from './conftest.js'

describe('keyboard event listener on the root', () => {
    it('hides the items list if key is Escape', () => {
        const { menu } = get_menu()
        menu.main_menu_div.classList.remove('hidden')
        menu.keydown_listener(new KeyboardEvent('keydown', { key: 'Escape' }))
        expect(menu.main_menu_div.classList.contains('hidden')).toBe(true)
    })

    it('does nothing if key is not Escape', () => {
        const { menu } = get_menu()
        menu.main_menu_div.classList.remove('hidden')
        menu.keydown_listener(new KeyboardEvent('keydown', { key: 'E' }))
        expect(menu.main_menu_div.classList.contains('hidden')).toBe(false)
    })
})
