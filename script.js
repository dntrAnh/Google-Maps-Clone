mapboxgl.accessToken = 'pk.eyJ1IjoiYW1lbGlhZG8iLCJhIjoiY2x4eGprNnRzMDMyMDJxb2phNHNldGMzOSJ9.j2m5aMtt45A8PMDbpfi9JQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    // console.log(position)
    setupMap([position.coords.longtitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48]) // Manchester
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center, 
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
}

