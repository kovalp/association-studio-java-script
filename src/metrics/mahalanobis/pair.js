import { MahalanobisBox } from './item.js'

class MahalanobisPair {
    constructor() {
        this.dia_inv_cov = new Float32Array([1.5, 1.5, 2, 2, 1, 1])
        this.sqr_pos_diff = 0.0
        this.sqr_yaw_diff = 0.0
        this.sqr_size_diff = 0.0
        this.sqr_maha_dist = 0.0
    }

    /**
     * @param {MahalanobisBox} b1 - first box
     * @param {MahalanobisBox} b2 - second box
     * @return {number} Mahalanobis similarity score (exp(-D^2 /(2 N))), where N = 6 in this case.
     */
    get_score(b1, b2) {
        const a1 = b1.xy_cs_lw,
            a2 = b2.xy_cs_lw

        const d0 = a1[0] - a2[0]
        const d1 = a1[1] - a2[1]
        const d2 = a1[2] - a2[2]
        const d3 = a1[3] - a2[3]
        const d4 = a1[4] - a2[4]
        const d5 = a1[5] - a2[5]

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
