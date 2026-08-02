import { AxesIoU } from './axes/score.js'
import { MahalanobisScore } from './mahalanobis/score.js'
import { SizeModMahaScore } from '@/metrics/size_mod/score.js'

class ScoreDriver {
    constructor() {
        this.iou_score = new AxesIoU()
        this.mahalanobis_score = new MahalanobisScore()
        this.size_mod_score = new SizeModMahaScore()
        this.ori_state = [0.0, 0.0, 0.0, 3.0, 1.5]
        this.iou_score.set_ref(this.ori_state)
        this.mahalanobis_score.set_ref(this.ori_state)
    }

    /**
     * @param {Float32Array} xy_yaw_lw
     * @returns {{giou: number, maha: number}}
     */
    compute_for(xy_yaw_lw) {
        const giou = this.iou_score.compute_for(xy_yaw_lw)
        const maha = this.mahalanobis_score.compute_for(xy_yaw_lw)
        const size_mod = this.size_mod_score.compute_for(xy_yaw_lw)
        return { giou, maha, size_mod }
    }

    /**
     * @param {number} value
     * @param {'precision-pos' | 'precision-yaw' | 'precision-size'} name
     */
    set_precision(value, name) {
        this.mahalanobis_score.set_precision(value, name)
    }
}

export { ScoreDriver }
