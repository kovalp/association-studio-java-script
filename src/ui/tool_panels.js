class ToolPanels {
    constructor(root = document) {
        this.reset_btn = root.querySelector('#reset-btn')
        this.score_val1 = root.querySelector('#score-val1')
        this.score_val2 = root.querySelector('#score-val2')
        this.inp_x = root.querySelector('#inp-x')
        this.inp_y = root.querySelector('#inp-y')
        this.inp_yaw = root.querySelector('#inp-yaw')
        this.inp_len = root.querySelector('#inp-len')
        this.inp_wdt = root.querySelector('#inp-wdt')
        document.body.addEventListener('keydown', this.handle_key_down.bind(this))
        this.key_map = {
            ArrowUp: [this.inp_y, this.inp_wdt, 1.0],
            ArrowDown: [this.inp_y, this.inp_wdt, -1.0],
            ArrowRight: [this.inp_x, this.inp_len, 1.0],
            ArrowLeft: [this.inp_x, this.inp_len, -1.0],
        }
        this.explain_maha_chk_box = root.querySelector('#explain-mahalanobis-chk-box')
        this.explain_maha_chk_box.addEventListener('click', this.handle_maha_panel_show.bind(this))
        this.explain_maha_panel = root.querySelector('#explain-mahalanobis-panel')
        this.inp_precision_pos = root.querySelector('#precision-pos')
        this.inp_precision_yaw = root.querySelector('#precision-yaw')
        this.inp_precision_size = root.querySelector('#precision-size')
        this.sqr_pos_diff = root.querySelector('#sqr-pos-diff')
        this.sqr_yaw_diff = root.querySelector('#sqr-yaw-diff')
        this.sqr_size_diff = root.querySelector('#sqr-size-diff')
        this.sqr_maha_dist = root.querySelector('#sqr-maha-dist')
    }

    handle_maha_panel_show(event) {
        this.explain_maha_panel.style.display = event.target.checked ? 'flex' : 'none'
    }

    handle_key_down(event) {
        if (this.key_map[event.key] && event.target.tagName === 'BODY') {
            const [normal_inp, alt_inp, dir] = this.key_map[event.key]
            this.step_inp_num(event.ctrlKey ? alt_inp : normal_inp, dir)
        } else if (event.key === 'r') {
            this.reset_btn.click()
        }
    }

    /**
     *  @param {HTMLInputElement} inp -- the input element of type number.
     *  @param {number} direction -- +1 or -1 to indicate the increment or decrement.
     **/
    step_inp_num(inp, direction) {
        inp.value = String(Number(inp.value) + direction * Number(inp.step))
        inp.dispatchEvent(new Event('change', { bubbles: true }))
    }

    set_scores(val1, val2) {
        this.score_val1.textContent = val1.toFixed(5)
        this.score_val2.textContent = val2.toFixed(5)
    }

    set_state(xy_yaw_lw) {
        this.inp_x.value = xy_yaw_lw[0].toFixed(2)
        this.inp_y.value = xy_yaw_lw[1].toFixed(2)
        this.inp_yaw.value = ((xy_yaw_lw[2] * 180) / Math.PI).toFixed(0)
        this.inp_len.value = xy_yaw_lw[3].toFixed(2)
        this.inp_wdt.value = xy_yaw_lw[4].toFixed(2)
    }

    /**
     *
     * @param {{sqr_pos_diff: number, sqr_yaw_diff: number, sqr_size_diff: number, sqr_maha_dist: number}} pp
     */
    set_maha_parameters(pp) {
        this.sqr_pos_diff.textContent = pp.sqr_pos_diff.toFixed(2)
        this.sqr_yaw_diff.textContent = pp.sqr_yaw_diff.toFixed(2)
        this.sqr_size_diff.textContent = pp.sqr_size_diff.toFixed(2)
        this.sqr_maha_dist.textContent = pp.sqr_maha_dist.toFixed(3)
    }
}

export { ToolPanels }
