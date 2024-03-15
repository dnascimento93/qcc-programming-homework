"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Dan Nascimento
      Date:   02/29/2024

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

// Book instructions
/*
function copyShippingToBilling() {
      if (useShip.checked) {
            document.querySelector('input[name="firstnameBill"]').value = document.querySelector('input[name="firstnameShip"]').value;
            document.querySelector('input[name="lastnameBill"]').value = document.querySelector('input[name="lastnameShip"]').value;
            document.querySelector('input[name="address1Bill"]').value = document.querySelector('input[name="address1Ship"]').value;
            document.querySelector('input[name="address2Bill"]').value = document.querySelector('input[name="address2Ship"]').value;
            document.querySelector('input[name="cityBill"]').value = document.querySelector('input[name="cityShip"]').value;
            document.querySelector('input[name="countryBill"]').value = document.querySelector('input[name="countryShip"]').value;
            document.querySelector('input[name="codeBill"]').value = document.querySelector('input[name="codeShip"]').value;
            document.querySelector('#stateBill').selectedIndex = document.querySelector('#stateShip').selectedIndex;
      }
}*/

// Practicing CSS selectors with a loop
function copyShippingToBilling() {
      if (useShip.checked) {
            let shippingInputs = document.querySelectorAll('#shipping input[type="text"]');
            let billingInputs = document.querySelectorAll('#billing input[type="text"]');
            for (let i = 0; i < shippingInputs.length; i++)
                  billingInputs[i].value = shippingInputs[i].value;
            document.querySelector('#stateBill').selectedIndex = document.querySelector('#stateShip').selectedIndex;
      }
}

let formElements = document.querySelectorAll('input[type="text"]');
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

for (let i = 0; i < fieldCount; i++) {
      formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt) {
      evt.preventDefault();
      errorBox.textContent = "Complete all highlighted fields";
}

