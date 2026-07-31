import { Dialog } from '@/ui/dialog'
import { vi } from 'vitest'

function get_about() {
    const doc_fixture = document.createElement('div')
    doc_fixture.innerHTML = `<dialog id="about-modal"><button type="button" id="about-modal-close-btn"></button></dialog>`

    const dialog = new Dialog(doc_fixture, 'about')
    dialog.modal.close = vi.fn()
    return dialog
}

export { get_about }
