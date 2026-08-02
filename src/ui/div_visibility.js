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
    }

    click_handler() {
        this.div.style.display = this.chk_box.checked ? 'block' : 'none'
    }
}

export { DivVisibility }
