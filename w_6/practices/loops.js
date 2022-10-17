myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
 //Write a function using a .forEach method to loop over an array and output it's contents in a <ul>
 

let listItem =  myInfo.favoriteFoods.map(e =>
    `<li>${e}</li>`)
    .toString()
    .replaceAll(",", " ")

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

document.getElementById("favorite-foods").innerHTML += listItem

let favoriteFood = myInfo.favoriteFoods.forEach((element) => 
document.getElementById("favorite-foods").innerHTML +=`<li>${element}</li>` 
)


// Activity 3 #
// Create a function that will take a food string and return that string embedded in some html. (<li>food</li>)
const makeLi = (str) => { `<li>${str}</li>` }


// Create a function that will take a place string and return that string embedded in some html. The place is a bit more complex. We have the location and the length. You can use the following for the template: <dt>${place.place}</dt><dd>${place.length}</dd>)
let placesLived = myInfo.placesLived.map(e =>
    `<dt>${e.place}</dt><dd>${e.length}</dd> `)
    .toString()
    .replaceAll(",", " ")

// Create a function that will take a list, and a callback function to produce an HTML template. The function should transform our list by looping over it calling the template function once for each item in the list. The function should return all of the HTML strings flattened into one long string.
const output = (list, callback) => list.map((element) => callback(element)).toString()
.replaceAll(",", " ")

document.getElementById("favorite-foods").innerHTML += output(myInfo.favoriteFoods, makeLi)


document.getElementById("places-lived").innerHTML += placesLived


  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);