import { TWO_PI } from '@/math_const.js'

class SizeModMahaPair {
    constructor() {
        this.pos_c = 0.2136 * 4
        this.size_c = 1.0
        this.yaw_c = 0.00682 * 4
        this.scale_xy = new Float32Array(2)
        this.sqr_diff = new Float32Array(5)
        this.precision = new Float32Array(5)
        this.sqr_maha_dist = 0.0
    }

    /**
     * @param {Float32Array} b1 - first box in xy_sz_lw format
     * @param {Float32Array} b2 - second box  in xy_sz_lw format
     * @return {number} Mahalanobis similarity with size-modulated covariance.
     */
    get_score(b1, b2) {
        this.sqr_diff[0] = (b1[0] - b2[0]) ** 2
        this.sqr_diff[1] = (b1[1] - b2[1]) ** 2
        const two_geo_dist = 4 * Math.acos(Math.abs(b1[2] * b2[2] + b1[3] * b2[3]) - 1e-14)
        this.sqr_diff[2] = two_geo_dist <= Math.PI ? two_geo_dist : TWO_PI - two_geo_dist
        this.sqr_diff[3] = (b1[4] - b2[4]) ** 2
        this.sqr_diff[4] = (b1[5] - b2[5]) ** 2

        this.scale_xy[0] = (b1[4] + b2[4]) ** 2
        this.scale_xy[1] = (b1[5] + b2[5]) ** 2

        this.precision[0] = this.pos_c / this.scale_xy[0]
        this.precision[1] = this.pos_c / this.scale_xy[1]
        this.precision[2] = this.yaw_c
        this.precision[3] = this.size_c / this.scale_xy[0]
        this.precision[4] = this.size_c / this.scale_xy[1]

        this.sqr_maha_dist = 0.0
        for (let i = 0; i < 5; i++) {
            this.sqr_maha_dist += this.sqr_diff[i] * this.precision[i]
        }
        return Math.exp(-Math.sqrt(this.sqr_maha_dist))
    }
}

export { SizeModMahaPair }
