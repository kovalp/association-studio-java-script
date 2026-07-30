class Dialog {
    constructor(root, name) {
        this.modal = root.querySelector(`#${name}-modal`)
        this.modal.addEventListener('click', this.close_when_outside_click.bind(this))
        this.close_btn = root.querySelector(`#${name}-modal-close-btn`)
        this.close_btn.addEventListener('click', () => {
            this.modal.close()
        })
    }

    open_shortcuts_modal() {
        this.modal.showModal()
    }

    close_when_outside_click(event) {
        const rect = this.modal.getBoundingClientRect()
        const isInDialog =
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width

        if (!isInDialog) {
            this.modal.close()
        }
    }
}

export { Dialog }
