
class AxesBox {
    //      ---- max
    //     |      |
    //    min ----

    constructor(xy_lw){
        this.area = Number(xy_lw[2] * xy_lw[3]);
        this.min_x = Number(0.0)
        this.max_x = Number(0.0)
        this.min_y = Number(0.0)
        this.max_y = Number(0.0)
        this.set_state(xy_lw)
    }

    set_state(xy_lw){
        this.area = Number(xy_lw[2] * xy_lw[3]);

        const hx = xy_lw[2] / 2
        this.min_x = xy_lw[0] - hx
        this.max_x = xy_lw[0] + hx

        const hy = xy_lw[3] / 2
        this.min_y = xy_lw[1] - hy
        this.max_y = xy_lw[1] + hy
    }

}

export {AxesBox};
