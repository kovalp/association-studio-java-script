/**
 *
 * @param {DOMRect} rect
 * @param {MouseEvent | {clientX: number, clientY: number}} event
 * @returns {boolean}
 */
function is_in_rect(rect, event) {
    const dx = event.clientX - rect.left
    const dy = event.clientY - rect.top
    return dx >= 0 && dx <= rect.width && dy >= 0 && dy <= rect.height
}

class Dialog {
    /**
     * @param {Document | HTMLElement} root
     * @param {string} name
     */
    constructor(root, name) {
        this.modal = root.querySelector(`#${name}-modal`)
        this.modal.addEventListener('click', this._close_when_outside.bind(this))
        this.close_btn = root.querySelector(`#${name}-modal-close-btn`)
        this.close_btn.addEventListener('click', (event) => {
            event.stopPropagation()
            this.modal.close()
        })
    }

    open_modal() {
        this.modal.showModal()
    }

    _close_when_outside(event) {
        if (!is_in_rect(this.modal.getBoundingClientRect(), event)) this.modal.close()
    }
}

export { Dialog, is_in_rect }
