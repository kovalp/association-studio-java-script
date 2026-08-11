import Chart from 'chart.js/auto'
import { ScoreStorage } from '@/metrics/score_storage.js'

class SampleSeries {
    /**
     *
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        this.chart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    { label: 'GIoU', data: [] },
                    { label: 'Maha', data: [] },
                    { label: 'SMMa', data: [] },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
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
        this.chart.data.labels = storage.sample_idx
        this.chart.data.datasets[0].data = storage.giou_scores
        this.chart.data.datasets[1].data = storage.maha_scores
        this.chart.data.datasets[2].data = storage.smma_scores
    }
}

export { SampleSeries }
