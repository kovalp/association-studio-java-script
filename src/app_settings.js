class AppSettings {
    constructor() {
        this.chart_type = localStorage.getItem('chart-type') ?? 'none'
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
