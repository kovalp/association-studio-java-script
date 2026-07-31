import { describe, it, expect } from 'vitest'
import { is_in_rect } from '@/ui/dialog'

describe('the function', () => {
    it('should return false when outside the rectangle', () => {
        const rect = new DOMRect(10, 20, 30, 40)
        expect(is_in_rect(rect, { clientX: 5, clientY: 6 })).toBe(false)
        expect(is_in_rect(rect, { clientX: 15, clientY: 6 })).toBe(false)
        expect(is_in_rect(rect, { clientX: 35, clientY: 6 })).toBe(false)
        expect(is_in_rect(rect, { clientX: 5, clientY: 30 })).toBe(false)
        expect(is_in_rect(rect, { clientX: 35, clientY: 65 })).toBe(false)
        expect(is_in_rect(rect, { clientX: 5, clientY: 65 })).toBe(false)
        expect(is_in_rect(rect, { clientX: 15, clientY: 65 })).toBe(false)
        expect(is_in_rect(rect, { clientX: 35, clientY: 65 })).toBe(false)
    })

    it('should return true when inside the rectangle', () => {
        const rect = new DOMRect(10, 20, 30, 40)
        expect(is_in_rect(rect, { clientX: 15, clientY: 26 })).toBe(true)
    })
})
