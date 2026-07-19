import {AxesBox} from "./item.js";

const {min, max} = Math;


class AxesPair {
    constructor(){
    }

    /**
     * @param {AxesBox} b1 - first box
     * @param {AxesBox} b2 - second box
     */
    _intersection(b1, b2){
        const min_max_x = min(b1.max_x, b2.max_x)
        const min_max_y = min(b1.max_y, b2.max_y)
        const max_min_x = max(b1.min_x, b2.min_x)
        const max_min_y = max(b1.min_y, b2.min_y)
        const sub_x = max(0.0, min_max_x - max_min_x)
        const sub_y = max(0.0, min_max_y - max_min_y)
        return sub_x * sub_y;
    }

    /**
     * @param {AxesBox} b1 - first box
     * @param {AxesBox} b2 - second box
     */
    _enclosing(b1, b2){
        const sub_x = max(b1.max_x, b2.max_x) - min(b1.min_x, b2.min_x)
        const sub_y = max(b1.max_y, b2.max_y) - min(b1.min_y, b2.min_y)
        return sub_x * sub_y;
    }

    /**
     * @param {AxesBox} b1 - first box
     * @param {AxesBox} b2 - second box
     */
    get_giou(b1, b2){
        const inter = this._intersection(b1, b2)
        const union = b1.area + b2.area - inter
        const iou = inter / union
        const uoe = union / this._enclosing(b1, b2)
        return (iou + uoe) / 2
    }
}

export {AxesPair};
