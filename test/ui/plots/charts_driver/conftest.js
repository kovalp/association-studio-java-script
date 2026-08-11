import { ChartsDriver } from '@/ui/plots/charts_driver.js'
import { AppSettings } from '@/app_settings.js'

function get_root() {
    const div = document.createElement('div')
    div.innerHTML = `
        <select id="main-menu-chart-type">
            <option value="none">None</option>
            <option value="line">Time series</option>
            <option value="scatter">Bivariate</option>
            <option value="bar">Box</option>
        </select>
        <div id="scatter-container">
            <select id="select-data-x">
                <option selected value="giou">GIoU</option>
                <option disabled value="maha">Maha</option>
                <option value="smma">SMMa</option>
            </select>
            <select id="select-data-y">
                <option disabled value="giou">GIoU</option>
                <option selected value="maha">Maha</option>
                <option value="smma">SMMa</option>
            </select>
            <canvas id="scatter-scores"></canvas>
        </div>
        <div id="line-container"><canvas id="plot-scores"></canvas></div>
        <div id="bar-container"><canvas id="bar-scores"></canvas></div>
    `
    return div
}

function get_cd() {
    const settings = new AppSettings()
    return new ChartsDriver(get_root(), settings)
}

export { get_cd }
