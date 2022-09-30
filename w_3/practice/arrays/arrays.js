// Activity 1 - Map 

let arr = ["one", "two", "three"];
let myList = arr.map(e => "<li>" + e + "</li>");
myList = myList.join(" ")
console.log(myList);

// Activity 2 - Map 

let arr2 = ["A", "B", "A"];
let grade = arr2.map(e => e == "A" ? e = 4 : e == "B" ? e = 3 : "");

// Activity 3 - Reduce

let gpaPoints = grade.reduce((acc, val) => acc + val) / grade.length;
console.log(gpaPoints);
console.log(grade);

// Activity 4 - Filter 

let myArray = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
let more_then_six = myArray.filter(e => e.length > 6);
console.log(more_then_six);

// Activity 5 - indexOf

let num = [12, 34, 21, 54];
let luckNumber = num.indexOf(21);
console.log(luckNumber);

// the Dom 

if (typeof window !== 'undefined') {
    document.getElementById("myList").innerHTML = myList
}
