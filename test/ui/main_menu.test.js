import { describe, it, expect } from 'vitest'
import { MainMenu } from '@/ui/main_menu.js'
import { Dialog } from '@/ui/dialog.js'
import { MenuDriver } from '@/ui/menu_driver.js'

const root = document.createElement('div')

root.innerHTML = `
    <button id="main-menu-btn"></button>
    <div id="main-menu-div">
        <div id="main-menu-about">About...</div>
        <div id="main-menu-keyboard-shortcuts">Keyboard shortcuts...</div>
        <input id="main-menu-chart-chk-box" type="checkbox">
    </div>
    
    <dialog id="keyboard-shortcuts-modal">
        <button type="button" id="keyboard-shortcuts-modal-close-btn">&times;</button>
    </dialog>

    <dialog id="about-modal">
        <button type="button" id="about-modal-close-btn">&times;</button>
        <span id="version-number"></span>
    </dialog>   
`

describe('MainMenu', () => {
    it('should derive items', () => {
        const mm = new MainMenu(root)
        expect(mm.driver).toBeInstanceOf(MenuDriver)
        expect(mm.about).toBeInstanceOf(Dialog)
        expect(mm.kbd_shortcuts).toBeInstanceOf(Dialog)
        expect(mm.driver.action_callback_map['main-menu-keyboard-shortcuts']).toBeInstanceOf(
            Function,
        )
        expect(mm.driver.action_callback_map['main-menu-about']).toBeInstanceOf(Function)
    })
})
