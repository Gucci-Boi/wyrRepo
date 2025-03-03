// gets canvas
let canvas = document.querySelector('#longestBridgeChart')
let context = canvas.getContext('2d')

// bridge info
bridges = [// Bridge Name,	            City, State,	                            Span (meters),	Coordinates (latitude, longitude)
    {name: 'Verrazzano-Narrows Bridge',	cityState: 'New York, NY',                    span: 1298.4, coordinates: [40.6066, -74.0447]},
    {name: 'Golden Gate Bridge',        cityState: 'San Francisco and Marin, CA',     span: 1280.2, coordinates: [37.8199, -122.4783]},
    {name: 'Mackinac Bridge',           cityState: 'Mackinaw and St Ignace, MI',      span: 1158.0, coordinates: [45.8174, -84.7278]},
    {name: 'George Washington Bridge',  cityState: 'New York, NY and New Jersey, NJ', span: 1067.0, coordinates: [40.8517, -73.9527]},
    {name: 'Tacoma Narrows Bridge',     cityState: 'Tacoma and Kitsap, WA',           span: 853.44, coordinates: [47.2690, -122.5517]}
]

// gets bridge name and span from bridges array
let bridgeName = bridges.map(bridge => bridge.name)
let bridgeLength = bridges.map(bridge => bridge.span)

// array for the colors
let chartColors = ['red', 'blue', 'green', 'yellow', 'purple']

// chart variables
let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: bridgeName,
        datasets: [{
            label: 'Span (in meters)',
            data: bridgeLength,
            backgroundColor: chartColors,
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