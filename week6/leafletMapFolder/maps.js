// variables
let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9 // level 1 is the world, level 20 is city blocks

// makes the map
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

// adds background/tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// coordinates and markers for colleges
campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

// adds a marker for each college using a loop
campuses.forEach(function(collegeCampus) {
    let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates)
        .bindPopup(markerText)
        .addTo(map)
})

// adds a circle around the Twin Cities Metro Area
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'blue',
    radius: 30000,
    fillOpacity: .2,
})
    .bindPopup('Twin Cities Metro Area')
    .addTo(map)