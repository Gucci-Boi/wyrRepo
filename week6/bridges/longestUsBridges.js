// starting location varaibles
let bridgeCenterCoordinates = [42.4729, -95.5510]
let zoomLevel = 4

// variables for the bridge icons
let bridgeIcon = L.icon({
    iconUrl: 'bridgeIcon.png',
    iconSize: [40, 40],
    iconAnchor: [25, 30]
})
let longestBridgeIcon = L.icon({
    iconUrl: 'longestBridgeIcon.png',
    iconSize: [40, 40],
    iconAnchor: [25, 30]
})

// makes the map
let map = L.map('bridgeMap').setView(bridgeCenterCoordinates, zoomLevel)

// adds background/tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

bridges = [// Bridge Name,	            City, State,	                            Span (meters),	Coordinates (latitude, longitude)
    {name: 'Verrazzano-Narrows Bridge',	cityState: 'New York, NY',                    span: 1298.4, coordinates: [40.6066, -74.0447]},
    {name: 'Golden Gate Bridge',        cityState: 'San Francisco and Marin, CA',     span: 1280.2, coordinates: [37.8199, -122.4783]},
    {name: 'Mackinac Bridge',           cityState: 'Mackinaw and St Ignace, MI',      span: 1158.0, coordinates: [45.8174, -84.7278]},
    {name: 'George Washington Bridge',  cityState: 'New York, NY and New Jersey, NJ', span: 1067.0, coordinates: [40.8517, -73.9527]},
    {name: 'Tacoma Narrows Bridge',     cityState: 'Tacoma and Kitsap, WA',           span: 853.44, coordinates: [47.2690, -122.5517]}
]

// variable that figures out which bridge is the longest
let longest = Math.max(...bridges.map(bridge => bridge.span))

bridges.forEach(function (bridge) {
    let markerText = `${bridge.name}<br>Span (in meters): ${bridge.span}`

    // gives the longest bridge a different bridge icon
    if (bridge.span === longest) {
        L.marker(bridge.coordinates, {icon: longestBridgeIcon})
            .bindPopup(markerText)
            .addTo(map)
    } else {
        L.marker(bridge.coordinates, {icon: bridgeIcon})
            .bindPopup(markerText)
            .addTo(map)
    }
})