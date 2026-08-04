class AppSettings {
    constructor() {
        this.is_chart_shown = Boolean(localStorage.getItem("show-chart"))
    }

    save_chart_visibility(){

    }
}

export {AppSettings}