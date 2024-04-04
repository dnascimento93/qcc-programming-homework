"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
      Author: Dan Nascimento
      Date:   04/03/2024

    Filename: project10-04.js
*/


// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

for (let piece of pieces) {
    piece.draggable = true;
    piece.ondragstart = function(e) {
        e.dataTransfer.setData("text", e.target.id);
    }
}

for (let boardSquare of boardSquares) {
    boardSquare.ondragover = function(e) {
        e.preventDefault();
    }
    boardSquare.ondrop = function(e) {
        e.preventDefault();
        let pieceID = e.dataTransfer.getData("text");
        let movingPiece = document.getElementById(pieceID);
        
        if (e.target.tagName === "TD") {
            e.target.appendChild(movingPiece);
        } else if (e.target.tagName === "SPAN") {
            let occupyingPiece = e.target;
            let square = occupyingPiece.parentElement;
            square.appendChild(movingPiece);

            if (occupyingPiece.className === "white") {
                whiteBox.appendChild(occupyingPiece);
            } else {
                blackBox.appendChild(occupyingPiece);
            }
        }
    }
}