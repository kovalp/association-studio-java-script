import {BivariatePlot} from "@/ui/plots/bivariate_plot.js";

function get_root() {
    const root = document.createElement('div')
    root.innerHTML = `
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
`
    return root
}

function get_bp() {
    return new BivariatePlot(get_root(), '#scatter-scores', '#select-data-x', '#select-data-y')
}

export {get_bp}
