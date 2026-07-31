import { describe, it, expect, vi } from 'vitest'
import { get_about } from './conftest.js'

describe('the close when outside internal callback', () => {
    it('closes when clicked outside the bounding rectangle', () => {
        const dialog = get_about()
        dialog.modal.getBoundingClientRect = () => {
            return new DOMRect(10, 11, 12, 13)
        }
        dialog._close_when_outside({ clientX: 5, clientY: 15 })
        expect(dialog.modal.close).toHaveBeenCalledTimes(1)
    })

    it('Do not closes when clicked inside the bounding rectangle', () => {
        const dialog = get_about()
        dialog.modal.getBoundingClientRect = () => {
            return new DOMRect(10, 11, 12, 13)
        }
        dialog._close_when_outside({ clientX: 15, clientY: 15 })
        expect(dialog.modal.close).toHaveBeenCalledTimes(0)
    })
})
