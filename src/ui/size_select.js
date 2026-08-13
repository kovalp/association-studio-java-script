class SizeSelect {
    /**
     * Callback for updating reference state.
     * @callback SetRefCallback
     * @param {number[]} value - The selected reference state values, e.g., [0, 0, 0, 1, 1]
     * @returns {void}
     */

    /**
     *
     * @param {HTMLSelectElement} select
     * @param {SetRefCallback} set_state
     */
    constructor(select, set_state) {
        this.value_state_map = { '1x1': [0, 0, 0, 1, 1], '3x1.5': [0, 0, 0, 3, 1.5] }
        this.select = select
        this.select.onchange = (e) => {
            set_state(this.value_state_map[e.target.value])
        }
    }
}

export { SizeSelect }
