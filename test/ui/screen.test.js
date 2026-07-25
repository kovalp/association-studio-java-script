import { describe, it, expect, vi } from 'vitest'
import { Screen } from '@/ui/screen'

describe('Screen constructor', () => {
    it('keeps the pointers to the context and the canvas', () => {
        const mock_ctx = { p: 1 }
        const mock_canvas = { p: 2 }
        const screen = new Screen(mock_canvas, mock_ctx)
        expect(screen.ctx === mock_ctx).toBe(true)
        expect(screen.canvas === mock_canvas).toBe(true)
    })
})

describe('Screen.clear', () => {
    it('should reset transform matrix and clear the full canvas area', () => {
        const mock_ctx = {
            setTransform: vi.fn(),
            clearRect: vi.fn(),
        }

        const mock_canvas = {
            width: 800,
            height: 600,
            getContext: vi.fn().mockReturnValue(mock_ctx),
        }

        const screen = new Screen(mock_canvas, mock_ctx)
        screen.clear()
        expect(mock_ctx.setTransform).toHaveBeenCalledWith(1, 0, 0, 1, 0, 0)
        expect(mock_ctx.clearRect).toHaveBeenCalledWith(0, 0, 800, 600)
    })
})
