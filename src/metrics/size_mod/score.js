import { SizeModMahaPair } from './pair'
import { yaw_to_quat } from '@/metrics/yaw_conversion.js'

class SizeModMahaScore {
    constructor() {
        this.ref = new Float32Array([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
        this.probe = new Float32Array([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
        this.pair = new SizeModMahaPair()
    }

    /**
     *
     * @param {Float32Array | Array<Number>} xy_yaw_lw
     */
    set_ref(xy_yaw_lw) {
        yaw_to_quat(xy_yaw_lw, this.ref)
    }

    /**
     *
     * @param {Float32Array | Array<Number>} xy_yaw_lw
     */
    compute_for(xy_yaw_lw) {
        yaw_to_quat(xy_yaw_lw, this.probe)
        return this.pair.get_score(this.ref, this.probe)
    }
}

export { SizeModMahaScore }
