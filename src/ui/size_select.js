import { BoxUi } from '@/ui/box_ui.js'
import { ScoreDriver } from '@/metrics/score_driver.js'

class SizeSelect {
    /**
     *
     * @param {HTMLElement | Document} root
     * @param {BoxUi} ref
     * @param {ScoreDriver} score_drv
     */
    constructor(root, ref, score_drv, set_state) {
        this.value_state_map = { '1x1': [0, 0, 0, 1, 1], '3x1.5': [0, 0, 0, 3, 1.5] }
        this.select = root.querySelector('#main-menu-ref-size')
        this.select.onchange = this.change_size.bind(this)
        this.ref = ref
        this.score_drv = score_drv
        this.set_state = set_state
    }

    change_size(event) {
        const ref_state = this.value_state_map[event.target.value]
        this.ref.set_state(ref_state)
        this.score_drv.computer.set_ref(ref_state)
        this.set_state(this.score_drv.computer.probe)
    }
}

export { SizeSelect }
