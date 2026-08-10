class VisibilitySwitch {
    /**
     *
     * @param {Document | HTMLElement} root
     * @param {String} select_query
     * @param {Record<String, String>} value_element_map
     */
    constructor(root, select_query, value_element_map) {
        this.select = root.querySelector(select_query)
        this.select.addEventListener('change', this.change_handler.bind(this))
        this.save_state_callback = (selected_option) => {}
        this.value_element_map = value_element_map
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
        for (let key in this.value_element_map) {
            const element = this.root.querySelector(this.value_element_map[key])
            if (element) {
                const disp = key === this.select.value ? 'block' : 'none'
                element.setAttribute('style', `display: ${disp}`)
            }
        }
    }
}

export { VisibilitySwitch }
