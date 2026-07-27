import { describe, it, expect, vi } from 'vitest'
import { get_bb } from './conftest'

describe('BoxBackend change-state callback setter', () => {
    it('should store & call', () => {
        const { box_back: bb, event: event } = get_bb()
        const callback = vi.fn()
        bb.set_change_state_callback(callback)
        expect(bb.box.change_state_callback === callback).toBe(true)
        expect(callback).toHaveBeenCalledTimes(1)
    })
})
