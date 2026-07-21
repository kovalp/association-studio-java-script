import {MahalanobisBox} from "./item.js";
import {MahalanobisPair} from "./pair.js";


function get_mah_state(xy_yaw_lw){
    return [xy_yaw_lw[0], xy_yaw_lw[1], Math.cos(xy_yaw_lw[2]), Math.sin(xy_yaw_lw[2]), xy_yaw_lw[3], xy_yaw_lw[4]];
}


class MahalanobisScore {
    constructor(){
        this.ref = new MahalanobisBox([0.0, 0.0, 1.0, 0.0, 3.0, 1.5]);
        this.probe = new MahalanobisBox([0.0, 0.0, 1.0, 0.0, 3.0, 1.5]);
        this.pair = new MahalanobisPair();
    }

    set_ref(xy_yaw_lw){
        this.ref.set_state(get_mah_state(xy_yaw_lw))
    }

    compute_for(xy_yaw_lw){
        this.probe.set_state(get_mah_state(xy_yaw_lw))
        return this.pair.get_score(this.ref, this.probe)
    }
}

export { MahalanobisScore };
