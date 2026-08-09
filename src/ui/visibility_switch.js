class VisibilitySwitch {
    /**
     *
     * @param {Document | HTMLElement} root
     * @param {String} select_query
     * @param {Record<String, String>} map_div
     */
    constructor(root, select_query, map_div) {
        this.select = root.querySelector(select_query)
        this.select.addEventListener('change', this.change_handler.bind(this))
        this.save_state_callback = (selected_option) => {}
        this.map_div = map_div
        this.root = root
    }

    /**
     *
     * @param {String} selected_option value from the settings (localStorage)
     */
    restore_state(selected_option) {
        this.select.value = selected_option
        this.update_style()
    }

    change_handler() {
        this.update_style()
        this.save_state_callback(this.select.value)
    }

    update_style() {
        for (let key in this.map_div) {
            const element = this.root.querySelector(this.map_div[key])
            if (element) {
                const disp = key === this.select.value ? 'block' : 'none'
                element.setAttribute('style', `display: ${disp}`)
            }
        }
    }
}

export { VisibilitySwitch }
