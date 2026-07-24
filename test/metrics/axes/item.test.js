import { describe, it as baseIt, expect } from 'vitest';
import { AxesBox } from '@/metrics/axes/item.js';

const it = baseIt.extend({box: ({}, use) => use(new AxesBox([1.0, 2.0, 3.0, 4.0]))})

describe('AxesBox constructor', () => {
    it('should initialize min-max x-y attributes', ({box}) => {
        expect(box.area).toBeCloseTo(12.0)
        expect(box.min_x).toBeCloseTo(-0.5)
        expect(box.min_y).toBeCloseTo(0.0)
        expect(box.max_x).toBeCloseTo(2.5)
        expect(box.max_y).toBeCloseTo(4.0)
    })
})

describe('AxesBox set_state method', () => {
    it('should compute min-max x-y attributes', ({box}) => {
        box.set_state([5.0, 6.0, 7.0, 8.0])
        expect(box.area).toBeCloseTo(56.0)
        expect(box.min_x).toBeCloseTo(1.5)
        expect(box.min_y).toBeCloseTo(2.0)
        expect(box.max_x).toBeCloseTo(8.5)
        expect(box.max_y).toBeCloseTo(10.0)
    })
})