class MahalanobisBox {
    //    (x,y,yaw,l,w) --> (x,y,cos(yaw),sin(yaw),l,w)
    constructor(xy_cs_lw){
        this.xy_cs_lw = new Float32Array(xy_cs_lw);
    }

    set_state(xy_cs_lw){
        for (let i=0; i<6; i++){this.xy_cs_lw[i] = xy_cs_lw[i]}
    }
}

export {MahalanobisBox};
