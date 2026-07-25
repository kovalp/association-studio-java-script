import { describe, it, expect, vi } from 'vitest'
import { get_bh } from './conftest.js'

describe('BoxHelper update the auxiliary transform', () => {
    it('should update transform matrix and define the inverse', () => {
        const bh = get_bh()

        bh.width = 800
        bh.height = 600
        bh.transform_scale = 30.0
        bh.xy_yaw_lw = new Float32Array([0.0, 1.0, 2.0, 3.0, 4.0])

        const cb_spy = vi.spyOn(bh, 'change_state_callback')

        bh.upd_transform()
        const tr_mat = bh.transform.toFloat32Array()
        // prettier-ignore
        expect(tr_mat).toBeDeepCloseTo([
             -12.484405517578125, -27.27892303466797, 0.0, 0.0,
             -27.27892303466797,  12.484405517578125, 0.0, 0.0,
              0.0,                 0.0,               1.0, 0.0,
            400.0,               270.0,               0.0, 1.0]
        )
        expect(bh.transform.inverse()).toBeDeepCloseTo(bh.inv_transform)
        expect(cb_spy).toHaveBeenCalledTimes(1)
    })
})
