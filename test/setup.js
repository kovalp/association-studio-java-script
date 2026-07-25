import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to'
import { expect } from 'vitest'
import { DOMMatrix, DOMPoint, DOMRect } from 'domgeom'

expect.extend({ toBeDeepCloseTo })

globalThis.DOMMatrix = DOMMatrix
globalThis.DOMPoint = DOMPoint
globalThis.DOMRect = DOMRect
