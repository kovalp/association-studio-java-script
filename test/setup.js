import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to'

import { expect } from 'vitest'
import DOMMatrix from 'dommatrix'

expect.extend({ toBeDeepCloseTo })

globalThis.DOMMatrix = DOMMatrix
