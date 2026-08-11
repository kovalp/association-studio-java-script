import Chart from 'chart.js/auto'
import { ScoreStorage } from '@/metrics/score_storage.js'

class BarPlot {
    /**
     *
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        this.storage = new ScoreStorage()
        this.storage.giou_scores.push(1)
        this.storage.maha_scores.push(1)
        this.storage.smma_scores.push(1)
        this.chart = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: ['GIoU', 'Maha', 'SMMa'],
                datasets: [
                    {
                        data: [1.0, 1.0, 1.0],
                        backgroundColor: ['#f16', '#a6f', '#fd6'],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        min: 0,
                        max: 1,
                    }
                },
                plugins: {
                    legend: {
                        display: false, // Hide legend since dataset colors vary per bar
                    },
                },
            },
        })
    }

    update() {
        const lai = this.storage.giou_scores.length - 1
        const data = this.chart.data.datasets[0].data
        data[0] = this.storage.giou_scores[lai]
        data[1] = this.storage.maha_scores[lai]
        data[2] = this.storage.smma_scores[lai]
        this.chart.update('none')
    }

    /**
     * @param {ScoreStorage} storage
     */
    set_storage(storage) {
        this.storage = storage
    }
}

export { BarPlot }
