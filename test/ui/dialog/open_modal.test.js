import { describe, it, expect, vi } from 'vitest'
import { get_about } from './conftest.js'

describe('the open modal method', () => {
    it('call show modal', () => {
        const dialog = get_about()
        dialog.modal.showModal = vi.fn()
        dialog.open_modal()
        expect(dialog.modal.showModal).toHaveBeenCalledTimes(1)
    })
})
