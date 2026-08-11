import Chart from 'chart.js/auto'
import { ScoreStorage } from '@/metrics/score_storage.js'
import { value_title_map, value_color_map } from './common.js'

class BivariatePlot {
    /**
     *
     * @param {HTMLElement | Document} root
     * @param {String} canvas
     * @param {String} select_x
     * @param {String} select_y
     */
    constructor(root, canvas, select_x, select_y) {
        this.storage = new ScoreStorage()
        this.select_x = root.querySelector(select_x)
        this.select_y = root.querySelector(select_y)
        this.select_x.addEventListener('change', this.change_data_x.bind(this))
        this.select_y.addEventListener('change', this.change_data_y.bind(this))

        this.chart = new Chart(root.querySelector(canvas), {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: '',
                        data: [],
                        borderColor: '#a6f',
                        backgroundColor: '#f16',
                        pointRadius: 4,
                        borderWidth: 2,
                        pointHoverRadius: 8,
                    },
                ],
            },
            options: {
                aspectRatio: 1,
                maintainAspectRatio: true,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    x: {
                        grid: { color: '#999', tickColor: '#999' },
                        ticks: { color: '#999' },
                        type: 'linear',
                        position: 'bottom',
                        title: { display: true, text: 'GIoU', color: '#f16' },
                    },
                    y: {
                        grid: { color: '#999', tickColor: '#999' },
                        title: { display: true, text: 'Maha', color: '#a6f' },
                        ticks: { color: '#999' },
                    },
                },
            },
        })
    }

    update() {
        this.chart.update('none')
    }

    /**
     * @param {ScoreStorage} storage
     */
    set_storage(storage) {
        this.storage = storage
        this.chart.data.labels = storage.giou_scores
        this.chart.data.datasets[0].data = storage.maha_scores
    }

    change_data_x(event) {
        const value = event.target.value
        this.chart.data.labels = this.storage[`${value}_scores`]
        this.chart.data.datasets[0].backgroundColor = value_color_map[value]
        this.change_data(value, this.chart.options.scales.x.title, this.select_y.options)
    }

    change_data_y(event) {
        const value = event.target.value
        this.chart.data.datasets[0].data = this.storage[`${value}_scores`]
        this.chart.data.datasets[0].borderColor = value_color_map[value]
        this.change_data(value, this.chart.options.scales.y.title, this.select_x.options)
    }

    /**
     *
     * @param {String} value
     * @param {Array<HTMLOptionElement>} options
     * @param {{text: String, color: String}} title
     */
    change_data(value, title, options) {
        title.text = value_title_map[value]
        title.color = value_color_map[value]
        for (let o of options) o.disabled = o.value === value
        this.update()
    }
}

export { BivariatePlot }
