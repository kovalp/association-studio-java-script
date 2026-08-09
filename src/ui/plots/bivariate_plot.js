import Chart from 'chart.js/auto'

class BivariatePlot {
    /**
     *
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        this.max_length = 300
        this.chart = new Chart(canvas, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: '',
                        data: [],
                        borderColor: '#f16',
                        backgroundColor: '#f16',
                        pointRadius: 4,
                        pointHoverRadius: 8,
                    },
                ],
            },
            options: {
                aspectRatio: 1, // Forces a 1:1 square canvas
                maintainAspectRatio: true, // Enforces the aspect ratio
                scales: {
                    x: {
                        grid: {
                            color: '#999', // Grid line color
                            tickColor: '#999', // Small tick marks on the axis line
                        },
                        ticks: {
                            color: '#999', // Color of numbers (0, 10, 20...)
                        },
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'GIoU',
                            color: '#f16',
                        },
                    },
                    y: {
                        grid: {
                            color: '#999', // Grid line color
                            tickColor: '#999', // Small tick marks on the axis line
                        },
                        title: {
                            display: true,
                            text: 'MAHA',
                            color: '#a6f',
                        },
                        ticks: {
                            color: '#999', // Color of numbers (0, 10, 20...)
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

export { BivariatePlot }
