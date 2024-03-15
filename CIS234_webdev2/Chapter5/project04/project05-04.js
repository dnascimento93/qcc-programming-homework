"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Dan Nascimento
      Date:   02/24/2024

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

// Step 3: Create a for loop to iterate over all of the phrases node.
for (let i = 0; i < phrases.length; i++) {

      // Add an onclick event handler to each phrase.
      phrases[i].onclick = function() {

            // Step 4: Create an h1 element and assign it to the phrase variable. Set its textContent to the clicked dfn element's textContent. (hint: 'this' object)
            let phrase = document.createElement("h1");
            phrase.textContent = this.textContent;

            // Step 5: Create a p element and assign it to the footnote variable. Set its textContent to the corresponding footnotes[i].
            // Apply italic font style and 1.2em font size.
            let footnote = document.createElement("p");
            footnote.textContent = footnotes[i];
            footnote.style.fontStyle = "italic";
            footnote.style.fontSize = "1.2em";

            // Step 6: Create an input element for the closeButton. Set its type to "button" and value to "Close Footnote".
            // Set display to 'block' and margin to '10px auto'
            let closeButton = document.createElement("input");
            closeButton.type = "button";
            closeButton.value = "Close Footnote";
            closeButton.style.display = "block";
            closeButton.style.margin = "10px auto";

            // Step 7: Open a new popup window with window.open()
            // Parameters: url is empty, title is "footnote", width=300, height=200, top=100, left=100
            let popup = window.open("", "footnote", "width=300, height=200, top=100, left=100");

            // Step 8: Apply these style rules to the popup window: background color: ivory, font size: 16px, padding: 10px
            popup.document.body.style.backgroundColor = "ivory";
            popup.document.body.style.fontSize = "16px";
            popup.document.body.style.padding = "10px";

            // Step 9: Append the phrase, footnote, and closeButton to the popup window's body.
            popup.document.body.appendChild(phrase);
            popup.document.body.appendChild(footnote);
            popup.document.body.appendChild(closeButton);

            // Step 10: Add an onclick event handler to closeButton that closes the popup window when clicked.
            closeButton.onclick = function() {
                  popup.close();
            }
      }
}
