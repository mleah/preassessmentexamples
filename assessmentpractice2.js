/*

You've been contracted to write inventory management software for the owner of a bicycle shop. She wants to be able to do the following:

- Track a bicycle's brand, model, color, and sale price
- Add bicycles to inventory
- Remove bicycles from inventory
- Change a bicycle's sale price
- Search for bicycles by brand, color, and sale price range (under $500, $500-$1000, $1000+)

BONUS: This store allows customers to put down a deposit and take a bike home on trial for up to 3 days. The software should let the owner check whether a bicycle is out "on trial", who is trying the bike, and what date the bike is due back in the store.


PSEUDO:

make a bicycle object
	-brand, color, model, saleprice,  method for changing, 


make Inventory object
	-takes bicycle as an array
	-has a method for displaying inventory
	-adds a bicycle
	-removes a bicycle


	***  I realize I am having problems with scoping and where to put objects that need to be passed into other objects as arrays.  UGh


function object(){
    var count = 1;
}
array = [];
var obj = new object();
array.push(obj);
array.push(obj);
array[1]['n'] = 5
produces

array
=> [ { n: 5 }, { n: 5 } ]

I am having problems calling functino methods now

*/

var sget = require("sget");

var Bicycle = function(brand, color, model, salePrice){
	this.brand = brand;
	this.color = color;
	this.model = model;
	this.salePrice = salePrice;

	this.changeSalePrice = function(){

	};

}

var Inventory = function(){
	this.bicycle = [];

	this.addBicycle = function(){  //I forgot how to make the userInput function to make sget nice and only use it on one line.  boo.
		var newBikeBrand = sget("\nPlease enter your new bikes brand.\n");
		var newBikeColor = sget("\nPlease enter your new bikes brand.\n");
		var newBikeModel = sget("\nPlease enter your new bikes brand.\n");
		var newBikeSalePrice = sget("\nPlease enter your new bikes brand.\n");
		var newBike = new Bike(newBikeBrand, newBikeColor, newBikeModel, newBikeSalePrice);
		this.bicycle.push(newBike);
	}

	this.removeBicycle = function(){ //loop through to match input to value of bike's brand, maybe one day implement actualy ID system 
		var bikeToRemove = sget("\nPlease enter the brand of the bike that you would like to remove.\n");
		for(var i = 0; i < this.bicycle.length; i++){
		
			if(bikeToRemove === this.bicycle[i].brand){
				this.bicycle.splice(newBike);
			} 
		}
	}
}


function inventoryMenu(){
	var userInput = sget("\nPlease tell BIMS what to do by making a choice by picking the appropriate number.\n\n1.  Display your Inventory.\n2.  Add bikes to your inventory.\n3.  Remove bikes from your inventory.\n4.  Quit BIMS\n").trim();
	switch (userInput){
		case "1":
			//display inventory
			inventoryMenu();
			break;

		case "2":
			Inventory.addBicycle();
			inventoryMenu();
			break;

		case "3":
			//delete bike
			inventoryMenu();
			break;

		case "4":
			quit();
			break;

		case "":
			console.log("\nPlease make sure to enter input!\n");
			inventoryMenu();
			break;

		default:
			console.log("\nPlease make sure to choose a valid number.\n");
			inventoryMenu();
			break;
		}
}

function quit(){
	console.log("\nBIMS is shutting down.\n......................\nThanks you for using the BIMS, brought to you by MCorp.\n");
	process.exit[0];
}


console.log("\nWelcome to Bicycle Inventory Management System (BIMS)!\n  BIMS is useful for tracking your inventory, as well as adding, removing, and changing the price of your bikes.\n  Smooth sailing.")
inventoryMenu();





