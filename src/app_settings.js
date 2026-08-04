class AppSettings {
    constructor() {
        this.is_chart_shown = Boolean(localStorage.getItem("show-chart"))
    }
}

export {AppSettings}