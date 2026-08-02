import { MahalanobisPair } from './pair'
import { yaw_to_cs } from '@/metrics/yaw_conversion.js'

class MahalanobisScore {
    constructor() {
        this.ref = new Float32Array([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
        this.probe = new Float32Array([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
        this.pair = new MahalanobisPair()
    }

    /**
     *
     * @param {Float32Array | Array<Number>} xy_yaw_lw
     */
    set_ref(xy_yaw_lw) {
        yaw_to_cs(xy_yaw_lw, this.ref)
    }

    /**
     *
     * @param {Float32Array | Array<Number>} xy_yaw_lw
     */
    compute_for(xy_yaw_lw) {
        yaw_to_cs(xy_yaw_lw, this.probe)
        return this.pair.get_score(this.ref, this.probe)
    }

    /**
     * @param {number} value
     * @param {'precision-pos' | 'precision-yaw' | 'precision-size'} name
     */
    set_precision(value, name) {
        if (name === 'precision-pos') {
            this.pair.dia_inv_cov[0] = Number(value)
            this.pair.dia_inv_cov[1] = Number(value)
        } else if (name === 'precision-yaw') {
            this.pair.dia_inv_cov[2] = Number(value)
            this.pair.dia_inv_cov[3] = Number(value)
        } else if (name === 'precision-size') {
            this.pair.dia_inv_cov[4] = Number(value)
            this.pair.dia_inv_cov[5] = Number(value)
        }
    }
}

export { MahalanobisScore }
