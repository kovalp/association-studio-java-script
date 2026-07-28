import { AxesIoU } from './axes/score.js'
import { MahalanobisScore } from './mahalanobis/score.js'

class ScoreDriver {
    constructor() {
        this.iou_score = new AxesIoU()
        this.mahalanobis_score = new MahalanobisScore()
        this.ori_state = new Float32Array([0.0, 0.0, 0.0, 3.0, 1.5])
        this.iou_score.set_ref(this.ori_state)
        this.mahalanobis_score.set_ref(this.ori_state)
    }

    /**
     * @param {Array<number>} xy_yaw_lw
     * @returns {{giou: number, maha: number}}
     */
    compute_for(xy_yaw_lw) {
        const giou = this.iou_score.compute_for(xy_yaw_lw)
        const maha = this.mahalanobis_score.compute_for(xy_yaw_lw)
        return { giou, maha }
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
