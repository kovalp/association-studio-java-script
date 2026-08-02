import Chart from "chart.js/auto";

class ChartDriver {
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
                    {label: 'GIoU', data: []},
                    {label: 'MAHA', data: []},
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
     */
    update(giou, maha) {
        this.chart.data.labels.push(this.num_upd)
        const datasets = this.chart.data.datasets
        datasets[0].data.push(giou)
        datasets[1].data.push(maha)
        if (datasets[0].data.length > this.max_length) {
            this.shift()
        }
        this.chart.update('none')
        this.num_upd += 1
    }

    shift(){
        this.chart.data.labels.shift()
        this.chart.data.datasets[0].data.shift()
        this.chart.data.datasets[1].data.shift()
    }
}

export {ChartDriver}