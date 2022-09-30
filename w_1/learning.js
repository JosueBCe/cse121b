
let currentDateAndTime = Date()

console.log("It is now "+currentDateAndTime)


let theTotal = total(1,2,3,4,5,6,7,8,9,10)

console.log("The total is "+theTotal)


function total(...numbers){
	let sum = 0;
	let array = [...numbers];
	const theSum = array.map( n => sum += n);

	return sum
}
