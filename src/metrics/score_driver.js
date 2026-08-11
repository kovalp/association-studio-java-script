import { ScoreStorage } from './score_storage.js'
import { ScoreComputer } from './score_computer.js'

class ScoreDriver {
    constructor() {
        this.ori_state = [0.0, 0.0, 0.0, 3.0, 1.5]
        this.computer = new ScoreComputer(this.ori_state)
        this.storage = new ScoreStorage()
    }

    /**
     * @param {Float32Array} xy_yaw_lw
     * @returns {{giou: Number, maha: Number, smma: Number}}
     */
    set_ref(xy_yaw_lw) {
        self.computer.set_ref(xy_yaw_lw)
    }

    /**
     * @param {Float32Array} xy_yaw_lw
     * @returns {{giou: Number, maha: Number, smma: Number}}
     */
    compute_for(xy_yaw_lw) {
        const ret_val = this.computer.compute_for(xy_yaw_lw)
        this.storage.store(this.computer.ref, this.computer.probe, ret_val)
        return ret_val
    }

    /**
     * @param {number} value
     * @param {'precision-pos' | 'precision-yaw' | 'precision-size'} name
     */
    set_precision(value, name) {
        this.computer.set_precision(value, name)
    }

    get_maha_parameters() {
        return this.computer.mahalanobis_score.pair
    }
}

export { ScoreDriver }
