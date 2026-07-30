class MainMenu {
    /**
     * @param {HTMLDivElement} root
     */
    constructor(root) {
        this.main_menu_btn = root.querySelector('#main-menu-btn')
        this.main_menu_div = root.querySelector('#main-menu-div')
        this.main_menu_div.addEventListener('click', this.main_menu_div_click.bind(this))
        this.main_menu_btn.addEventListener('click', this.main_menu_btn_click.bind(this))
        root.addEventListener('keydown', this.keydown_listener.bind(this))
        root.addEventListener('click', this.close_menu_outside_click.bind(this))
        this.action_callback_map = {
            'main-menu-keyboard-shortcuts': () => {},
            'main-menu-about': () => {},
        }
    }

    main_menu_div_click(event) {
        const item = event.target.closest('.menu-item')
        if (!item) return
        const callback = this.action_callback_map[item.id]
        if (callback) callback()
    }

    main_menu_btn_click(event) {
        event.stopPropagation()
        const isHidden = this.main_menu_div.classList.toggle('hidden')
        this.main_menu_btn.setAttribute('aria-expanded', !isHidden)
    }

    keydown_listener(event) {
        if (event.key === 'Escape' && !this.main_menu_div.classList.contains('hidden')) {
            this.main_menu_div.classList.add('hidden')
            this.main_menu_btn.setAttribute('aria-expanded', 'false')
            this.main_menu_btn.focus()
        }
    }

    close_menu_outside_click() {
        if (!this.main_menu_div.classList.contains('hidden')) {
            this.main_menu_div.classList.add('hidden')
            this.main_menu_btn.setAttribute('aria-expanded', 'false')
        }
    }
}

export { MainMenu }
