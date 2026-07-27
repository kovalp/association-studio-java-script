import { beforeEach, afterEach, vi } from 'vitest'
import { createCanvas, DOMMatrix, DOMPoint } from 'canvas'
import { BoxBackend } from '@/ui/box_backend.js'
import { BoxHelper } from '@/ui/box_helper.js'

beforeEach(() => {
    vi.stubGlobal('DOMMatrix', DOMMatrix)
    vi.stubGlobal('DOMPoint', DOMPoint)
})

afterEach(() => {
    vi.unstubAllGlobals()
})

function get_bb() {
    const canvas = createCanvas(640, 480)
    const stage = document.createElement('div')
    canvas.addEventListener = vi.fn()
    vi.spyOn(document, 'getElementById').mockImplementation((id) => {
        if (id === 'canvas-ui') {
            return canvas
        } else if (id === 'stage') {
            return stage
        } else {
            return null
        }
    })

    vi.spyOn(window, 'addEventListener')
    let bb = new BoxBackend('canvas-ui', 'red', [1.0, 2.0, 3.0, 4.0, 5.0])
    vi.spyOn(bb, 'draw')
    return {
        box_back: bb,
        canvas: canvas,
        stage: stage,
        event: { offsetX: 360, offsetY: 160, target: { style: { cursor: '' }, value: 1.23 } },
    }
}

function get_bh() {
    return new BoxHelper([1.0, 2.0, 3.0, 4.0, 5.0], 640, 480)
}

export { get_bb, get_bh }
