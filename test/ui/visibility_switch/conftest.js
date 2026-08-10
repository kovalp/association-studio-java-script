import { VisibilitySwitch } from '@/ui/visibility_switch.js'

function get_root() {
    const root = document.createElement('div')
    root.innerHTML = `
        <select id="main-menu-chart-type">
            <option value="none">None</option>
            <option value="line">Time series</option>
            <option value="scatter" selected>Bivariate</option>
        </select>
        <div class="chart-container" id="chart-container"></div>
        <div class="chart-container" id="scatter-container"></div>
    `
    return root
}

function get_map() {
    return {
        none: '#absent-id-asdr2tr',
        line: '#chart-container',
        scatter: '#scatter-container',
    }
}

function get_vs() {
    return new VisibilitySwitch(get_root(), '#main-menu-chart-type', get_map())
}

export { get_root, get_map, get_vs }
