/**
 *
 * @param {Float32Array | Array<Number>} xy_yaw_lw
 * @param {Float32Array} xy_cs_lw
 * @returns {(*|number)[]}
 */
function yaw_to_cs(xy_yaw_lw, xy_cs_lw) {
    xy_cs_lw.set(xy_yaw_lw.slice(0, 2))
    xy_cs_lw[2] = Math.cos(xy_yaw_lw[2])
    xy_cs_lw[3] = Math.sin(xy_yaw_lw[2])
    xy_cs_lw.set(xy_yaw_lw.slice(3, 5), 4)
}

/**
 *
 * @param {Float32Array | Array<Number>} xy_yaw_lw  the state in format x,y, yaw, l, w
 * @param {Float32Array} xy_sz_lw the state in format x,y, s, z, l, w, where s is quaternion scalar, z is z component
 * @returns {(*|number)[]}
 */
function yaw_to_quat(xy_yaw_lw, xy_sz_lw) {
    xy_sz_lw.set(xy_yaw_lw.slice(0, 2))
    xy_sz_lw[2] = Math.cos(xy_yaw_lw[2] / 2)
    xy_sz_lw[3] = Math.sin(xy_yaw_lw[2] / 2)
    xy_sz_lw.set(xy_yaw_lw.slice(3, 5), 4)
}

export { yaw_to_cs, yaw_to_quat }
