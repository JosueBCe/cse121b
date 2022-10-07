/* 
1) Display input box for user to enter grades along with a button to kick off the calculation.
    

2) Add an event listener to the button that will do the following when clicked:
   getgrades (v) => v = v.toString()  return v 

3) Get the string of grades from the input

4) Convert the string to an array (String.split(',')), clean up any extra spaces, and make the grades all uppercase.

5) Do a lookup on each grade to convert it to it's point value (ie A = 4.0)

6) Total up all the point values, and divide by the number of grades to get the GPA

7) Output the GPA to the browser */


const getGrades = () => {
    let grades = document.querySelector("#grades").value;
    let arr = grades.split(",");
    let gradesArr = arr.map(grade => grade.trim().toUpperCase());
    return gradesArr;
}



const lookupGrade = (array) => array.map(grade => grade == "A" ? grade = 4 : grade == "B" ? grade = 3 : grade == "C" ? grade = 2 : grade == "D" ? grade = 1 : grade)

const clickHandler = () => {

    console.log(calculateGpa(lookupGrade(getGrades())));
    displayGrade(calculateGpa(lookupGrade(getGrades())))
}

const calculateGpa = (lookupGrade) => {
    let gpa = lookupGrade.reduce((e, a) => e + a) / lookupGrade.length;
    return gpa.toFixed(2)
}

const displayGrade = (gpa) => {
    document.getElementById("output").innerHTML = gpa
}

document
    .querySelector("#submitButton")
    .addEventListener("click", clickHandler) 