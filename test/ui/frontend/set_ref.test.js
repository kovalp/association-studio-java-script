import { describe, it, expect } from 'vitest'
import { get_front } from './conftest'

describe('set_ref method', () => {
    it('defines the attributes', () => {
        let front = get_front()
        vi.spyOn(front, 'set_probe')
        front.set_ref(new Float32Array([1.0, 2.0, 3.0, 4.0, 5.0]))
        expect(front.ref.box.xy_yaw_lw).toBeDeepCloseTo([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(front.score_drv.computer.ref).toBeDeepCloseTo([1.0, 2.0, 3.0, 4.0, 5.0])
        expect(front.set_probe).toHaveBeenCalledTimes(1)
        expect(front.set_probe).toHaveBeenCalledWith(front.score_drv.computer.probe)
    })
})
