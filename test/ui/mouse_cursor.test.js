import { describe, it, expect } from 'vitest'
import { get_cursor } from '@/ui/mouse_cursor'

describe('mouse cursor', () => {
    it('should be empty when no flags are true', () => {
        const style = get_cursor(false, false, false)
        expect(style).toBe('')
    })

    it('should be a pointer when the in-box', () => {
        const style = get_cursor(true, false, false)
        expect(style).toBe('pointer')
    })

    it('should be all scroll when the in-edge', () => {
        const style = get_cursor(false, false, true)
        expect(style).toBe('all-scroll')
    })

    it('should be rotation marker when the in-moon', () => {
        const style = get_cursor(false, true, false)
        expect(style).toContain('svg')
    })
})
