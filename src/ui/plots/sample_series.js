import Chart from 'chart.js/auto'

class SampleSeries {
    /**
     *
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        this.max_length = 300
        this.chart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    { label: 'GIoU', data: [] },
                    { label: 'MAHA', data: [] },
                    { label: 'SMMA', data: [] },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        })
        this.num_upd = 0
    }

    /**
     *
     * @param {number} giou
     * @param {number} maha
     * @param {number} size_mod
     */
    update(giou, maha, size_mod) {
        this.chart.data.labels.push(this.num_upd)
        const datasets = this.chart.data.datasets
        datasets[0].data.push(giou)
        datasets[1].data.push(maha)
        datasets[2].data.push(size_mod)
        if (datasets[0].data.length > this.max_length) {
            this.shift()
        }
        this.chart.update('none')
        this.num_upd += 1
    }

    shift() {
        this.chart.data.labels.shift()
        this.chart.data.datasets[0].data.shift()
        this.chart.data.datasets[1].data.shift()
        this.chart.data.datasets[2].data.shift()
    }
}

export { SampleSeries }
