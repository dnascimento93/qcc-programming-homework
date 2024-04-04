"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
      Author: Dan Nascimento
      Date:   04/03/2024

    Filename: project10-03.js
*/

function showMap() {

    // Page objects
    let bikeMap = document.getElementById("bikeMap");
    let bikeDirections = document.getElementById("bikeDirections");
    let startingPoint = document.getElementById("startingPoint");
    let endingPoint = document.getElementById("endingPoint");   

    // Create objects to set up directions and rendering services
    let bikeFind = new google.maps.DirectionsService();
    let bikeDraw = new google.maps.DirectionsRenderer();

    // Show the map with Boulder as the starting point
    let Boulder = {lat: 40.01753, lng: -105.26496};
    let myMap = new google.maps.Map(bikeMap, {
        zoom: 12,
        center: Boulder
    });

    startingPoint.onchange = drawRoute;
    endingPoint.onchange = drawRoute;

    function drawRoute() {
        if (startingPoint.selectedIndex != 0 && endingPoint.selectedIndex != 0) {
            let bikeRoute = {
                origin: startingPoint.value,
                destination: endingPoint.value,
                travelMode: "BICYCLING"
            }

            bikeFind.route(bikeRoute, function(result, status) {
                if (status == "OK") {
                    bikeDraw.setDirections(result);
                    bikeDraw.setMap(myMap);
                    bikeDraw.setPanel(bikeDirections);
                } else {
                    bikeDirections.textContent = "Directions Unavailable: " + status;
                }
            });
        }
    }

}


