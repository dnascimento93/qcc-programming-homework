/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Dan Nascimento
      Date:   02/05/2024

      Filename: project02-03.js
 */


// square
document.getElementById("square").addEventListener("mouseover", function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the square";
});
document.getElementById("square").addEventListener("mouseout", function() {
      document.getElementById("feedback").innerHTML = "";
});


// triangle
document.getElementById("triangle").addEventListener("mouseover", function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the triangle";
});
document.getElementById("triangle").addEventListener("mouseout", function() {
      document.getElementById("feedback").innerHTML = "";
});


// circle
document.getElementById("circle").addEventListener("mouseover", function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the circle";
});
document.getElementById("circle").addEventListener("mouseout", function() {
      document.getElementById("feedback").innerHTML = "";
});
