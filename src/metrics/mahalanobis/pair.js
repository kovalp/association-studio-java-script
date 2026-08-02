class MahalanobisPair {
    constructor() {
        this.dia_inv_cov = new Float32Array([1.5, 1.5, 2, 2, 1, 1])
        this.sqr_pos_diff = 0.0
        this.sqr_yaw_diff = 0.0
        this.sqr_size_diff = 0.0
        this.sqr_maha_dist = 0.0
    }

    /**
     * @param {Float32Array} b1 - first box in xy_cs_lw format
     * @param {Float32Array} b2 - second box in xy_cs_lw format
     * @return {number} Mahalanobis similarity score (exp(-D^2 /(2 N))), where N = 6 in this case.
     */
    get_score(b1, b2) {
        const d0 = b1[0] - b2[0]
        const d1 = b1[1] - b2[1]
        const d2 = b1[2] - b2[2]
        const d3 = b1[3] - b2[3]
        const d4 = b1[4] - b2[4]
        const d5 = b1[5] - b2[5]

        const s0 = d0 * d0
        const s1 = d1 * d1
        const s2 = d2 * d2
        const s3 = d3 * d3
        const s4 = d4 * d4
        const s5 = d5 * d5

        this.sqr_pos_diff = s0 + s1
        this.sqr_yaw_diff = s2 + s3
        this.sqr_size_diff = s4 + s5

        const w = this.dia_inv_cov
        this.sqr_maha_dist = s0 * w[0] + s1 * w[1] + s2 * w[2] + s3 * w[3] + s4 * w[4] + s5 * w[5]
        return Math.exp(-this.sqr_maha_dist / 12.0)
    }
}

export { MahalanobisPair }
