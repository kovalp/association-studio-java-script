class AppSettings {
    constructor() {
        const ct = localStorage.getItem('chart-type')
        this.chart_type = ct ? ct : 'none'
    }

    /**
     *
     * @param {String} chart_type
     */
    save_chart_type(chart_type) {
        this.chart_type = chart_type
        localStorage.setItem('chart-type', chart_type)
    }
}

export { AppSettings }
