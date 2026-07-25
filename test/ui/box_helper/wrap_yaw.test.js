import { describe, it, expect } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper wrap yaw angle', () => {
    it('ensure the range 0..2 pi', () => {
        const bh = get_bh()

        bh.wrap_yaw()
        expect(bh.xy_yaw_lw[2]).toBeCloseTo(3.0)

        bh.xy_yaw_lw[2] = 7.0
        bh.wrap_yaw()
        expect(bh.xy_yaw_lw[2]).toBeCloseTo(7 - 2 * Math.PI)

        bh.xy_yaw_lw[2] = 123.0
        bh.wrap_yaw()
        expect(bh.xy_yaw_lw[2]).toBeCloseTo(3.619479179382324)

        bh.xy_yaw_lw[2] = -1.0
        bh.wrap_yaw()
        expect(bh.xy_yaw_lw[2]).toBeCloseTo(2 * Math.PI - 1.0)

        bh.xy_yaw_lw[2] = -123.0
        bh.wrap_yaw()
        expect(bh.xy_yaw_lw[2]).toBeCloseTo(2.663706064224243)

    })
})
