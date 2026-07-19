import {AxesBox} from "./item.js";
import {AxesPair} from "./pair.js";


function get_axes_state(xy_yaw_lw){
    return [xy_yaw_lw[0], xy_yaw_lw[1], xy_yaw_lw[3], xy_yaw_lw[4]];
}


class AxesIoU {
    constructor(){
        this.ref = new AxesBox([0.0, 0.0, 3.0, 1.5]);
        this.probe = new AxesBox([0.0, 0.0, 3.0, 1.5]);
        this.pair = new AxesPair();
    }

    get_metric() {
        return this.pair.get_giou(this.ref, this.probe);
    }

    set_ref(xy_yaw_lw){
        this.ref.set_state(get_axes_state(xy_yaw_lw))
    }

    set_probe(xy_yaw_lw){
        this.probe.set_state(get_axes_state(xy_yaw_lw))
    }
}

export { AxesIoU };
