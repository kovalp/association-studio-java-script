import { describe, it as baseIt, expect } from 'vitest';
import { AxesBox } from '@/metrics/axes/item';
import { _intersection, _enclosing, get_giou } from '@/metrics/axes/pair';

const it = baseIt.extend({
    b1: ({}, use) => use(new AxesBox([1.0, 2.0, 3.0, 4.0])),
    b2: ({}, use) => use(new AxesBox([2.0, 3.0, 4.0, 5.0]))
})

describe('_intersection function', () => {
    it('should calculate the intersection area', ({b1, b2}) => {
        const intersection = _intersection(b1, b2)
        expect(intersection).toBeCloseTo(8.75)
    })
})

describe('_enclosing function', () => {
    it('should calculate the enclosing area', ({b1, b2}) => {
        const enclosing = _enclosing(b1, b2)
        expect(enclosing).toBeCloseTo(24.75)
    })
})


describe('get_giou function', () => {
    it('should calculate GIoU', ({b1, b2}) => {
        const score = get_giou(b1, b2)
        expect(score).toBeCloseTo(0.6578690127077225)
    })
})
