"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming
      Author: Dan Nascimento
      Date:   03/15/2024

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/
let cart = {
   items: [],
   addItem: function(foodItem) {
      this.items.push(foodItem);
   }
};

function Pizza() {
   this.size = null;
   this.crust = null;
   this.toppings = [];
}

function Topping() {
   this.name = null;
   this.side = null;
}

Pizza.prototype.addToCart = function() {
   cart.items.push(this);
};

Pizza.prototype.summarize = function() {
   let summary = "Pizza: ";
   summary += this.size + " " + this.crust + " ";
   for (let i = 0; i < this.toppings.length; i++) {
      summary += this.toppings[i].name + " (" + this.toppings[i].side + ") ";
   }
   return summary;
};


/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // pizza topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
} 

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");  

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);                                  
      }
   }      
}

// Function to build the pizza
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked");
   let myPizza = new Pizza();
   myPizza.size = pizzaSizeBox.value;
   myPizza.crust = pizzaCrustBox.value;
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== 'none') {
         let myTopping = new Topping();
         myTopping.name = checkedToppings[i].name;
         myTopping.side = checkedToppings[i].value;
         myPizza.toppings.push(myTopping); // instructions in the book says addTopping(myTopping) for this line but that makes no sense
      }
   }
   return myPizza;
}

// Function to add the built pizza to the shopping cart
function updateCart() {
   let myPizza = buildPizza();
   cart.addItem(myPizza);
   console.log(cart);
   let p = document.createElement('p');
   p.textContent = myPizza.summarize(myPizza);
   cartBox.appendChild(p);
   clearPizzaImage();
   clearToppings();
}  
