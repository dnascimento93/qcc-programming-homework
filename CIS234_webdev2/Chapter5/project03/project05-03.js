"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Dan Nascimento
      Date:   02/24/2024

      Filename: project05-03.js
*/

let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
      if (n.nodeName === heading) {

            // a. Create an element node named anchor for the a element.
            let anchor = document.createElement("a");

            // b. Set the value of the name attribute of anchor to the text string: “doclink” + headingCount.
            // .name works but VS code tells me it's deprecated and to use .id instead.
            anchor.id = "doclink" + headingCount;

            // c. Use the insertBefore() method to insert anchor before first child of the n node.
            n.insertBefore(anchor, n.firstElementChild);

            // d. Create an element node named listItem for the li element and an element node named link for the a element. Use the appendChild() method to append link to listItem.
            let listItem = document.createElement("li");
            let link = document.createElement("a");
            listItem.appendChild(link);

            // e. Set the value of the textContent property of link to n.textContent.
            link.textContent = n.textContent;

            // f. Set the value of the href property of listItem to the text string: “#doclink” + headingCount;
            link.href = "#doclink" + headingCount;

            // g. Use the appenChild() method to append listItem to the toc object.
            toc.appendChild(listItem);

            // h. Increase the value of the headingCount variable by 1.
            headingCount++;
      }
}
