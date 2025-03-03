// gets canvas
let canvas = document.querySelector('#sodaChart')
let context = canvas.getContext('2d')

// chart variables
let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Root Beer', 'Sprite', 'Either', 'Neither'],
        datasets: [{
            label: 'Number of votes',
            data: [12, 19, 14, 15, 9],
            backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple'],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})