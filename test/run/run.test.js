import { describe, it, expect } from 'vitest'
import { run } from '@/run'
import { index_fixture } from '../setup.js'
import { Frontend } from '@/ui/frontend'
import './conftest.js'

describe('run', () => {
    it('should run correctly', () => {
        const front = run(index_fixture)
        expect(front).toBeInstanceOf(Frontend)
    })
})
