import { AxesIoU } from './axes/score.js'
import { MahalanobisScore } from './mahalanobis/score.js'
import { SizeModMahaScore } from './size_mod/score.js'

class ScoreComputer {
    /**
     *
     * @param {Float32Array | Array<Number>} ref  reference state in the format xy_yaw_lw
     */
    constructor(ref) {
        this.iou_score = new AxesIoU()
        this.mahalanobis_score = new MahalanobisScore()
        this.size_mod_score = new SizeModMahaScore()
        this.ref = new Float32Array(ref)
        this.probe = new Float32Array(5)
        this.set_ref(ref)
    }

    /**
     * @param {Float32Array | Array<Number>} ref_state  reference state in the format xy_yaw_lw
     * */
    set_ref(ref_state) {
        this.ref.set(ref_state)
        this.size_mod_score.set_ref(ref_state)
        this.iou_score.set_ref(ref_state)
        this.mahalanobis_score.set_ref(ref_state)
    }

    /**
     * @param {Float32Array} xy_yaw_lw
     * @returns {{giou: Number, maha: Number, smma: Number}}
     */
    compute_for(xy_yaw_lw) {
        this.probe.set(xy_yaw_lw)
        const giou = this.iou_score.compute_for(xy_yaw_lw)
        const maha = this.mahalanobis_score.compute_for(xy_yaw_lw)
        const smma = this.size_mod_score.compute_for(xy_yaw_lw)
        return { giou, maha, smma }
    }

    /**
     * @param {number} value
     * @param {'precision-pos' | 'precision-yaw' | 'precision-size'} name
     */
    set_precision(value, name) {
        this.mahalanobis_score.set_precision(value, name)
    }
}

export { ScoreComputer }
