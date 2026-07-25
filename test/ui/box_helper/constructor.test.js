import { describe, it, expect } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper constructor', () => {
    it('should have the attributes', () => {
        const bh = get_bh()
        expect(bh.edge_width).toBeCloseTo(0.35)
        expect(bh.moon_radius).toBeCloseTo(0.5)
        expect(bh.min_size).toBeCloseTo(0.5)
        expect(bh.width).toEqual(640)
        expect(bh.height).toEqual(480)
        expect(bh.xy_yaw_lw).toBeInstanceOf(Float32Array)
        expect(bh.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(bh.transform_scale).toBeCloseTo(40.0)
        expect(bh.half_sxy).toBeInstanceOf(Float32Array)
        expect(bh.half_sxy).toBeDeepCloseTo([2.0, 2.5])
        expect(bh.transform).toBeInstanceOf(DOMMatrix)
        expect(bh.offset_xy).toBeInstanceOf(DOMPoint)
        expect(bh.data_xy).toBeInstanceOf(DOMPoint)
        const tr_mat = bh.transform.toFloat32Array()
        // prettier-ignore
        expect(tr_mat).toBeDeepCloseTo([
             -39.599700927734375, -5.644800186157227, 0.0, 0.0,
             -5.644800186157227,  39.599700927734375, 0.0, 0.0,
              0.0,                 0.0,               1.0, 0.0,
            360.0,               160.0,               0.0, 1.0]
        )
        expect(bh.transform.inverse()).toBeDeepCloseTo(bh.inv_transform)
        expect(bh.change_state_callback).toBeInstanceOf(Function)
    })
})
