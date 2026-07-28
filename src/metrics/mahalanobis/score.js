import { MahalanobisBox } from './item'
import { MahalanobisPair } from './pair'

function get_mah_state(xy_yaw_lw) {
    return [
        xy_yaw_lw[0],
        xy_yaw_lw[1],
        Math.cos(xy_yaw_lw[2]),
        Math.sin(xy_yaw_lw[2]),
        xy_yaw_lw[3],
        xy_yaw_lw[4],
    ]
}

class MahalanobisScore {
    constructor() {
        this.ref = new MahalanobisBox([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
        this.probe = new MahalanobisBox([0.0, 0.0, 1.0, 0.0, 3.0, 1.5])
        this.pair = new MahalanobisPair()
    }

    set_ref(xy_yaw_lw) {
        this.ref.set_state(get_mah_state(xy_yaw_lw))
    }

    compute_for(xy_yaw_lw) {
        this.probe.set_state(get_mah_state(xy_yaw_lw))
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

export { MahalanobisScore, get_mah_state }
