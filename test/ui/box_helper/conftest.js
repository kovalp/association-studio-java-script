import { beforeEach, afterEach, vi } from 'vitest'
import { DOMMatrix, DOMPoint } from 'domgeom'
import { BoxHelper } from '@/ui/box_helper'

function get_bh() {
    return new BoxHelper([1.0, 2.0, 3.0, 4.0, 5.0], 640, 480)
}

beforeEach(() => {
    vi.stubGlobal('DOMMatrix', DOMMatrix)
    vi.stubGlobal('DOMPoint', DOMPoint)
})

afterEach(() => {
    vi.unstubAllGlobals()
})

export { get_bh }
