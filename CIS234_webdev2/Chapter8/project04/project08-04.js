"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Dan Nascimento
      Date:   03/17/2024

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   fr.onload = function(){ 
      let staff = JSON.parse(fr.result);
      makeStaffTable(staff);
   }
   
};

function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");
   for (let header in staff.directory[0]) {
      let headerCell = document.createElement("th");
      headerCell.textContent = header;
      headerRow.appendChild(headerCell);
   }
   staffTable.appendChild(headerRow);

   for (let row in staff.directory) {
      let tableRow = document.createElement("tr");
      for (let column in staff.directory[row]) {
         let tableCell = document.createElement("td");
         tableCell.textContent = staff.directory[row][column];
         tableRow.appendChild(tableCell);
      }
      staffTable.appendChild(tableRow);
   }
   containerBox.appendChild(staffTable);
}
