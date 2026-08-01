import { MenuDriver } from '@/ui/menu_driver.js'

function get_menu() {
    const root = document.createElement('div')
    root.innerHTML = `
<button id="main-menu-btn">Main menu</button>
<div id="main-menu-div" class="main-menu-div hidden">
    <div class="menu-item" id="main-menu-about">About...</div>
    <div class="menu-item" id="main-menu-keyboard-shortcuts">Keyboard shortcuts...</div>
</div>`

    const menu = new MenuDriver(root)
    return { menu, root }
}

export { get_menu }
