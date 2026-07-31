import { describe, it, expect } from 'vitest'
import { get_about } from './conftest.js'

describe('the constructor', () => {
    it('should define the attributes deriving from root', () => {
        const dialog = get_about()
        expect(dialog.close_btn).toBeInstanceOf(HTMLButtonElement)
        expect(dialog.modal).toBeInstanceOf(HTMLDialogElement)
    })

    it('should close when clicking on the close button', () => {
        const dialog = get_about()
        dialog.close_btn.click()
        expect(dialog.modal.close).toHaveBeenCalledTimes(1)
    })

    it('should stay open when clicking inside the dialog', () => {
        const dialog = get_about()
        dialog.modal.getBoundingClientRect = () => {
            return new DOMRect(0, 0, 0, 0)
        }
        dialog.modal.click()
        expect(dialog.modal.close).toHaveBeenCalledTimes(0)
    })

    it('should close when clicking outside the dialog', () => {
        const dialog = get_about()
        dialog.modal.getBoundingClientRect = () => {
            return new DOMRect(10, 11, 12, 13)
        }
        dialog.modal.click()
        expect(dialog.modal.close).toHaveBeenCalledTimes(1)
    })
})
