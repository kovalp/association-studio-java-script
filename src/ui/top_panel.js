
function step_inp_num(inp, direction) {
    inp.value = Number(inp.value) + direction * Number(inp.step);
    inp.dispatchEvent(new Event('change', { bubbles: true }));
}


class TopPanel{
    constructor(){
        this.reset_btn = document.getElementById("reset-btn")
        this.score_val1 = document.getElementById("score-val1")
        this.score_val2 = document.getElementById("score-val2")
        this.inp_x = document.getElementById("inp-x")
        this.inp_y = document.getElementById("inp-y")
        this.inp_yaw = document.getElementById("inp-yaw")
        this.inp_len = document.getElementById("inp-len")
        this.inp_wdt = document.getElementById("inp-wdt")
        window.addEventListener('keydown', this.handle_key_down.bind(this))
        this.key_map = {
            ArrowUp:    [this.inp_y,   this.inp_wdt,  1.0],
            ArrowDown:  [this.inp_y,   this.inp_wdt, -1.0],
            ArrowRight: [this.inp_x,   this.inp_len,  1.0],
            ArrowLeft:  [this.inp_x,   this.inp_len, -1.0],
        }
    }

    handle_key_down(event){
        if (this.key_map[event.key]) {
            const [normal_inp, alt_inp, dir] = this.key_map[event.key];
            step_inp_num(event.altKey ? alt_inp : normal_inp, dir);
        }
    }

    set_scores(val1, val2){
        this.score_val1.textContent = val1.toFixed(5);
        this.score_val2.textContent = val2.toFixed(5);
    }

    set_state(xy_yaw_lw){
        this.inp_x.value = xy_yaw_lw[0].toFixed(2);
        this.inp_y.value = xy_yaw_lw[1].toFixed(2);
        this.inp_yaw.value = (xy_yaw_lw[2] * 180 / Math.PI).toFixed(0);
        this.inp_len.value = xy_yaw_lw[3].toFixed(2);
        this.inp_wdt.value = xy_yaw_lw[4].toFixed(2);
    }

}

export {TopPanel};
