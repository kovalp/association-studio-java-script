import { describe, it, expect } from 'vitest'
import { get_menu } from './conftest.js'

describe('click listener on the items element', () => {
    it('calls the closest callback', () => {
        const { menu } = get_menu()
        let is_called_about = false
        menu.action_callback_map['main-menu-about'] = () => {
            is_called_about = true
        }
        menu.main_menu_div.closest = () => {
            return { id: 'main-menu-about' }
        }
        menu.main_menu_div.dispatchEvent(new PointerEvent('click'))
        expect(is_called_about).toBe(true)
    })

    it('does not call undefined', () => {
        const { menu } = get_menu()
        menu.action_callback_map['main-menu-about'] = undefined
        menu.main_menu_div.closest = () => {
            return { id: 'main-menu-about' }
        }
        menu.main_menu_div.dispatchEvent(new PointerEvent('click'))
    })

})
