class ScoreStorage {
    constructor() {
        this.max_num_stored = 300
        this.ref_states = []
        this.prb_states = []
        this.giou_scores = []
        this.maha_scores = []
        this.smma_scores = []
        this.current_idx = 0
        this.sample_idx = []
    }

    /**
     * @param {Float32Array} ref_state  reference state in format xy_yaw_lw
     * @param {Float32Array} prb_state  probe state in format xy_yaw_lw
     * @param {{giou: Number, maha: Number, smma: Number}} scores
     * giou -- GIoU association score
     * maha -- Mahalanobis distance D with static covariance in Gaussian function exp(-D^2/12)
     * smma -- Mahalanobis distance with size-modulated covariance in Exponential function exp(-D)
     */
    store(ref_state, prb_state, scores) {
        this.sample_idx.push(this.current_idx)
        this.current_idx++
        this.ref_states.push(new Float32Array(ref_state))
        this.prb_states.push(new Float32Array(prb_state))
        this.giou_scores.push(scores.giou)
        this.maha_scores.push(scores.maha)
        this.smma_scores.push(scores.smma)

        if (this.ref_states.length > this.max_num_stored) {
            this.shift()
        }
    }

    shift() {
        this.sample_idx.shift()
        this.ref_states.shift()
        this.prb_states.shift()
        this.giou_scores.shift()
        this.maha_scores.shift()
        this.smma_scores.shift()
    }
}

export { ScoreStorage }
