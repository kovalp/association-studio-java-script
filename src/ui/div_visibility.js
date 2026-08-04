class DivVisibility {
    /**
     *
     * @param {Document | HTMLElement} root
     * @param {String} chk_box
     * @param {String} div
     */
    constructor(root, chk_box, div) {
        this.chk_box = root.querySelector(chk_box)
        this.div = root.querySelector(div)
        this.chk_box.addEventListener('click', this.click_handler.bind(this))
        this.save_state_callback = (is_checked) => {}
    }

    /**
     *
     * @param {Boolean} is_checked value from the settings (localStorage)
     */
    restore_state(is_checked) {
        this.chk_box.checked = is_checked
        this.update_style()
    }

    click_handler() {
        this.update_style()
        this.save_state_callback(this.chk_box.checked)
    }

    update_style() {
        this.div.style.display = this.chk_box.checked ? 'block' : 'none'
    }

}

export { DivVisibility }
