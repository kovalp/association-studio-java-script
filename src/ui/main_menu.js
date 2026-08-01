import { MenuDriver } from '@/ui/menu_driver.js'
import { Dialog } from '@/ui/dialog.js'

class MainMenu {
    constructor(root) {
        this.main_menu = new MenuDriver(root)
        this.kbd_shortcuts = new Dialog(root, 'keyboard-shortcuts')
        this.about = new Dialog(root, 'about')
        this.main_menu.action_callback_map['main-menu-keyboard-shortcuts'] =
            this.kbd_shortcuts.open_modal.bind(this.kbd_shortcuts)
        this.main_menu.action_callback_map['main-menu-about'] = this.about.open_modal.bind(
            this.about,
        )
    }
}

export { MainMenu }
