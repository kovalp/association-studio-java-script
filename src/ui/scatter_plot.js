import Chart from 'chart.js/auto'

class ScatterPlot {
    /**
     *
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        this.max_length = 100
        this.chart = new Chart(canvas, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Series MAHA vs Series GIoU',
                        data: [],
                        backgroundColor: 'cyan',
                        pointRadius: 3,
                        pointHoverRadius: 8,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'GIoU',
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'MAHA',
                        },
                    },
                },
            },
        })
        this.num_upd = 0
    }

    /**
     *
     * @param {number} giou
     * @param {number} maha
     */
    update(giou, maha) {
        this.chart.data.labels.push(this.num_upd)
        const data = this.chart.data.datasets[0].data
        data.push({ x: giou, y: maha })
        if (data.length > this.max_length) {
            this.shift()
        }

        this.chart.update('none')
        this.num_upd += 1
    }

    shift() {
        const data = this.chart.data.datasets[0].data
        data.shift()
    }
}

export { ScatterPlot }
