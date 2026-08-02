import { MenuDriver } from '@/ui/menu_driver.js'
import { Dialog } from '@/ui/dialog.js'

class MainMenu {
    constructor(root) {
        this.driver = new MenuDriver(root)
        this.kbd_shortcuts = new Dialog(root, 'keyboard-shortcuts')
        this.about = new Dialog(root, 'about')
        this.driver.action_callback_map['main-menu-keyboard-shortcuts'] =
            this.kbd_shortcuts.open_modal.bind(this.kbd_shortcuts)
        this.driver.action_callback_map['main-menu-about'] = this.about.open_modal.bind(this.about)
    }
}

export { MainMenu }
