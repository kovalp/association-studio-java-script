import { describe, it, expect } from 'vitest'
import { run } from '@/run'
import { fixture } from './conftest'
import { Frontend } from '@/ui/frontend'

describe('run', () => {
    it('should run correctly', () => {
        const front = run(fixture)
        expect(front).toBeInstanceOf(Frontend)
    })
})
