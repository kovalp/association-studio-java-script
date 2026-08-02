import { describe, it, expect } from 'vitest'
import { get_menu } from './conftest.js'

describe('the constructor', () => {
    it('should define the attributes button and items rectangle', () => {
        const { menu } = get_menu()
        expect(menu.main_menu_btn).toBeInstanceOf(HTMLButtonElement)
        expect(menu.main_menu_div).toBeInstanceOf(HTMLDivElement)
        expect(menu.action_callback_map).toEqual({})
        expect(menu.main_menu_div.classList.contains('hidden')).toBe(true) // this comes from HTML, not JS
    })

    it('should define the listener to the click event on the button', () => {
        const { menu } = get_menu()
        menu.main_menu_btn.click()
        expect(menu.main_menu_div.classList.contains('hidden')).toBe(false)
    })

    it('should define the listener to the click event on the items list', () => {
        const { menu } = get_menu()
        menu.main_menu_div.click()
        expect(menu.main_menu_div.classList.contains('hidden')).toBe(true)
    })

    it('the root gets an Esc button listener', () => {
        const { menu, root } = get_menu()
        menu.main_menu_div.classList.toggle('hidden')
        root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
        expect(menu.main_menu_div.classList.contains('hidden')).toBe(true)
    })

    it('the root gets a click listener', () => {
        const { menu, root } = get_menu()
        menu.main_menu_div.classList.toggle('hidden')
        root.click()
        expect(menu.main_menu_div.classList.contains('hidden')).toBe(true)
    })
})
