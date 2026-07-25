import { describe, it as baseIt, expect } from 'vitest'
import { AxesIoU, get_axes_state } from '@/metrics/axes/score'
import { AxesBox } from '@/metrics/axes/item'

describe('get_axes_state helper function', () => {
    it('should return correct value given (x,y,yaw,l,w)', () => {
        const xy_lw = get_axes_state([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(xy_lw).toBeInstanceOf(Float32Array)
        expect(xy_lw).toBeDeepCloseTo([1, 2, 4, 5])
    })
})

const it = baseIt.extend({ sa: ({}, use) => use(new AxesIoU()) })

function check_axes_box(box) {
    expect(box).toBeInstanceOf(AxesBox)
    expect(box.min_x).toBeCloseTo(-1.5)
    expect(box.max_x).toBeCloseTo(1.5)
    expect(box.min_y).toBeCloseTo(-0.75)
    expect(box.max_y).toBeCloseTo(0.75)
}

describe('AxesIoU constructor', () => {
    it('should have the attributes', ({ sa }) => {
        check_axes_box(sa.ref)
        check_axes_box(sa.probe)
    })
})

describe('AxesIoU reference setter', () => {
    it('sets the reference box from x,y,yaw,l,w state', ({ sa }) => {
        sa.set_ref([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(sa.ref.min_x).toBeCloseTo(-1.0)
        expect(sa.ref.min_y).toBeCloseTo(-0.5)
        expect(sa.ref.max_x).toBeCloseTo(3.0)
        expect(sa.ref.max_y).toBeCloseTo(4.5)
        check_axes_box(sa.probe)
    })
})

describe('AxesIoU compute method', () => {
    it('sets the probe box from x,y,yaw,l,w state and computes GIoU', ({ sa }) => {
        const score = sa.compute_for([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(score).toBeCloseTo(0.5254803675856308)
        expect(sa.probe.min_x).toBeCloseTo(-1.0)
        expect(sa.probe.min_y).toBeCloseTo(-0.5)
        expect(sa.probe.max_x).toBeCloseTo(3.0)
        expect(sa.probe.max_y).toBeCloseTo(4.5)
        check_axes_box(sa.ref)
    })
})
