/*

ISBN - International Standard Book Number
-----------------------------------------
There are two ISBN standards: ISBN-10 and ISBN-13.

Here are some valid examples of ISBN-13:

ISBN-13:    9780470059029
            978 0 471 48648 0
            978-0596809485
            978-0-13-149505-0
            978-0-262-13472-9

ISBN-13 is made up of 12 digits plus a check digit. Spaces and hyphens may be included in a code, but are not significant. This means that 9780471486480 is equivalent to 978-0-471-48648-0 and 978 0 471 48648 0.

The check digit for ISBN-13 is calculated by multiplying each digit alternately by 1 or 3 (i.e., 1 x 1st digit, 3 x 2nd digit, 1 x 3rd digit, 3 x 4th digit, etc.), summing these products together, taking modulo 10 of the result and subtracting this value from 10, and then taking the modulo 10 of the result again to produce a single digit.

Create a function that takes a string and returns true if that is a valid ISBN-13 and false otherwise.

PSEDUOCODE

ok, looks like I need regex for spaces and hypens.  should use .replace for the string

*/
var sget = require("sget");


function checkISBN(isbn){

	var isbnNumber = userInput(isbn); 
	
	if(isValidISBN(isbnNumber)){
		console.log("\n" + isbnNumber + " is a valid ISBN!\n");
	} else {
		console.log("\n" + isbnNumber + " is not a valid ISBN!\n");
	}
}


function userInput(isbnInput){ // for future reference if I want to get userInput eventually

	var isbnNumberInput = isbnInput.replace(/\s+|-+/g, "");
	return isbnNumberInput;

}


function isValidISBN(isbn){  //turn into number, turn into array, apply specific math against even or odd indexes of array
	
	var isbnArray = isbn.split("").map(Number);

	var isbnCounter = 0;
	var isbnCheckDigit = isbnArray.pop();


	for(var i = 0; i < isbnArray.length; i++){
		if(isbnArray[i] === 0 || isbnArray[i] % 2 === 0){
			isbnCounter += isbnArray[i];
			console.log(isbnCounter);
			
		} else {
			var multiplyByThree = isbnArray[i] * 3;
			isbnCounter +=multiplyByThree;
			console.log(isbnCounter);
			
		}
	}

	var isbnChecker = (10 - isbnCounter%10)%10;

	console.log("This is the ISBN counter.  " + isbnCounter + " This is the ISBN checker.  " + isbnChecker + "  This is the isbn digitchecker: " + isbnCheckDigit);

	if(isbnCounter === isbnCheckDigit){
		return true;
	} else{
		return false;
	}

}


checkISBN("978   0470059--029");

