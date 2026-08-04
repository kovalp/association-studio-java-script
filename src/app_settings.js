class AppSettings {
    constructor() {
        this.is_chart_shown = localStorage.getItem('show-chart') === 'true'
    }

    /**
     *
     * @param {Boolean} is_chart_shown
     */
    save_chart_visibility(is_chart_shown) {
        localStorage.setItem('show-chart', is_chart_shown ? 'true' : 'false')
    }
}

export { AppSettings }
