/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

let me = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string

me.name = "Josué Benjamin Centurión";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

me.photo = "images/me.png";

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

me.favoriteFoods = ["Lasaña", "Milanesa", "Argentine Empanadas", "Espagueti"];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

me.hobbies = ["Running", "Coding", "Meditating", "Spending time with Family", "Studying Languages", "Playing Piano"];

// Step 6: Add another property named placesLived with a value of an empty array

me.placesLived = [
    {
        place: "Brazil",
        length: "1 year"
    },
    {
        place: "Argentina",
        length: "20 years"
    },
    {
        place: "Paraguay",
        length: "10 days"
    }
];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

document.querySelector("#name").innerHTML = me.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

document.getElementById("photo").src = me.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

document.getElementById("photo").alt = me.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

let listItem = me.favoriteFoods.map(e =>
    `<li>${e}</li>`)
    .toString()
    .replaceAll(",", " ")

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

document.getElementById("favorite-foods").innerHTML += listItem

// Step 6: Repeat Step 4 for each hobby in the hobbies property

let hobby = me.hobbies.map(e =>
    `<li>${e}</li>`)
    .toString()
    .replaceAll(",", " ")

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

document.getElementById("hobbies").innerHTML += hobby

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

let placeAndLength = me.placesLived.map(e =>
    `<dt>${e.place}</dt><dd>${e.length}</dd> `)
    .toString()
    .replaceAll(",", " ")


// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

document.getElementById("places-lived").innerHTML += placeAndLength
