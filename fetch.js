// variable for the URL
let url = "https://api.wheretheiss.at/v1/satellites/25544"

// gets the <span> elements
let issLatitude = document.querySelector("#issLatitude")
let issLongitude = document.querySelector("#issLongitude")

// other variables
let dateIssLocation = document.querySelector("#date")
let updateTime = 10000
let issMarker
let issIcon = L.icon({
    iconUrl: 'img.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25],
})

// stuff for the map
let map = L.map('issMap')
    .setView([0, 0], 1) // centered at coordinates (0, 0) and min zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// stuff in case there are errors with the program/data
let maxFailedAttempts = 3
iss(maxFailedAttempts) // calls iss() first
// calls iss() every 10 seconds
setInterval(iss, updateTime)

// updates the ISS coordinates and icon position
function iss(attempts) {
    // stops the program if there's more than 3 attempts
    if (attempts <= 0) {
        console.log("---Error---")
        return
    }

    fetch(url)
        .then((response) => response.json())
        .then((issData) => {
            console.log(issData)

            // gets updated longitude and latitude
            let latitude = issData.latitude
            let longitude = issData.longitude

            // updates the html
            issLatitude.innerHTML = latitude
            issLongitude.innerHTML = longitude

            // checks if the marker exists
            if (!issMarker) {
                issMarker = L.marker([latitude, longitude], {icon: issIcon}).addTo(map)
            } else {
                issMarker.setLatLng([latitude, longitude])
            }

            // updates the time
            let now = Date()
            dateIssLocation.innerHTML = `At ${now} the ISS is over the following coordinates:`
        })
        .catch((error) => {
            attempts--
            console.log("Error: ", error)
        })
        .finally(() => setTimeout(iss, update, attempts))
}