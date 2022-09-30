/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

myName = "Josué Centurión"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.querySelector('#name').innerText = myName

// Step 3: declare and instantiate a variable to hold the current year

const d = new Date()

// Step 4: place the value of the current year variable into the HTML file

document.querySelector("#year").innerHTML = d.getFullYear();

// Step 5: declare and instantiate a variable to hold the name of your picture
// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector("img").setAttribute("src","./images/me.png");


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let myFavFood = ["Milanesa", "Lasaña", "Cookies", "Alfajores de Maisena"];

// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector("#food").innerText = myFavFood;

// Step 3: declare and instantiate a variable to hold another favorite food

let anotherFavFood = ["Argentine Asado"]


// Step 4: add the variable holding another favorite food to the favorite food array

myFavFood.push(anotherFavFood);

// Step 5: repeat Step 2

document.querySelector("#food").innerText = myFavFood;

// Step 6: remove the first element in the favorite foods array

myFavFood.shift();

// Step 7: repeat Step 2

document.querySelector("#food").innerText = myFavFood;

// Step 8: remove the last element in the favorite foods array

myFavFood.pop();

// Step 7: repeat Step 2

document.querySelector("#food").innerText = myFavFood;


