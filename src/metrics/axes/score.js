import { AxesBox } from './item'
import { get_giou } from './pair'

/**
 * @param {Array<number>} xy_yaw_lw - oriented bounding box in x,y,yaw,l,w format.
 * @returns {Float32Array} - buffer with the yaw dropped.
 */
function get_axes_state(xy_yaw_lw) {
    const out = new Float32Array(4)
    out[0] = xy_yaw_lw[0]
    out[1] = xy_yaw_lw[1]
    out[2] = xy_yaw_lw[3]
    out[3] = xy_yaw_lw[4]
    return out
}

class AxesIoU {
    constructor() {
        this.ref = new AxesBox([0.0, 0.0, 3.0, 1.5])
        this.probe = new AxesBox([0.0, 0.0, 3.0, 1.5])
    }

    set_ref(xy_yaw_lw) {
        this.ref.set_state(get_axes_state(xy_yaw_lw))
    }

    compute_for(xy_yaw_lw) {
        this.probe.set_state(get_axes_state(xy_yaw_lw))
        return get_giou(this.ref, this.probe)
    }
}

export { AxesIoU, get_axes_state }
