import {MahalanobisBox} from "./item.js";


class MahalanobisPair {
    constructor(){
        this.dia_inv_cov = new Float32Array([1.48, 1.48, 4, 4, 2, 2])
        this.temp = new Float32Array(6)
    }

    /**
     * @param {MahalanobisBox} b1 - first box
     * @param {MahalanobisBox} b2 - second box
     * @return Mahalanobis similarity score (exp(-D^2 /(2 N))), where N = 6 in this case.
     */
    get_score(b1, b2){
        for (let i = 0; i < 6; i++){
            this.temp[i] = (b2.xy_cs_lw[i] - b1.xy_cs_lw[i]) ** 2 * this.dia_inv_cov[i]
        }
        const sqr = this.temp.reduce((s, c) => {return s + c});
        return Math.exp(-sqr / 12.0)
    }
}

export {MahalanobisPair};
