// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

/*
// Create the map object with a center and zoom level (ALTERNATE; useful for adding multiple tile layers)
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });
*/ 

/*
// leaflet tilelayer code loads and displays tile layer on the map: we can modify it and assign a var
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
*/

/* this bit will create a tile layer for the map. we can also use one of the preloaded ones from mapbox
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
*/

// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// general format for referencing a spot on the map, adjust as necessary:
// var marker = L.marker([51.5, -0.09]).addTo(map);

/*
//  Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);

L.circle([32.7157, -117.1611], {
  radius: 300
}).addTo(map);

L.circleMarker([37.7749, -122.4194]).addTo(map);

L.circleMarker([40.7128, -74.0060],{
  radius: 300,
  color: "black",
  fillcolor: '#ffffal'
}).addTo(map);
*/

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
 });

 // Get data from cities.js
let cityData = cities;

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "red"
}).addTo(map);

// Coordinates for each point to be used in the polyline.
let line2 = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line2, {
   color: "yellow"
}).addTo(map);

