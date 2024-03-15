"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Dan Nascimento
      Date:   02/29/2024

      Filename: project06-02.js
*/


window.addEventListener("load", function() {
      let allSelect = document.querySelectorAll("form#govLinks select");

      for (let i = 0; i < allSelect.length; i++) {
            allSelect[i].onchange = function(evt) {
                  let linkURL = evt.target.value;
                  let newWin = window.open(linkURL);
            }
      }
});

/*
1. Use your code editor to open the project06-02_txt.html and project06-02_txt.js files from the js06 > project02 folder. Enter your name and the date in the comment section of each file and save them as project06-02.html and project06-02.js, respectively.

2. Go to the project06-02.html file in your code editor and link the page to the project06-02.js file, deferring loading of the script. Study the contents of the file and note that with each option the URL address is stored as the options value. Save your changes to the file.

3. Go to the project06-02.js file in your code editor. Add an event listener that runs an anonymous function when the page loads.

4. Within the anonymous function, add a statement that uses the querySelectorAll() method to create a node list of all elements matching the CSS selector form#govLinks select. Store the node list in the allSelect variable.

5. Also, within the anonymous function: Insert a for loop that iterates through all of the contents of the allSelect node list. At each iteration of the allSelect node list do the following:
      a. Apply the onchange event handler to allSelect[i] to run an anonymous function when the selection list option is changed. Add the parameter evt to the anonymous function.

      b. Within the nested anonymous function retrieve the value property of evt.target and store it in the linkURL variable.

      c. Within the nested anonymous function: Use the window.open() method to open a new browser window with linkURL as the url of the window. You do not have to set a name for the window or any window options. Store the window under the newWin variable.
6. Save your changes to the file and then open project06-02.html in your web browser.

7. Verify that by selecting an entry from one of three selection lists, the web page for that entry opens in a new browser tab or window.
*/