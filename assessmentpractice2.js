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

I am having problems calling functino methods now.  I tried putting
inventorymethod within the inventory object, and I still couldn't call the
methods correctly.  I need to check this out more.

I FIGURED IT OUT-I FORGOT TO MAKE AN INVENTORY OBJECT . FOr future refernce, make sure to make your object  :)

*/

var sget = require("sget");

var Bicycle = function(brand, color, model, salePrice){
	this.brand = brand;
	this.color = color;
	this.model = model;
	this.salePrice = salePrice;

	this.changeSalePrice = function(){  //need to choose bike, then change salePrice. 
		var bikeChoice = getUserInput("Please choose the bike you would like to change the price of: \n");

			
		//if(bikeChoice === brand)

	};

};

var Inventory = function(){
	this.bicycles = [];

	this.addBicycle = function(brand, color, model, price){  
		this.bicycles.push(new Bicycle(brand, color, model, price));
	};

	this.removeBicycle = function(){ //loop through to match input to value of bike's brand, maybe one day implement actual ID system 
		var bikeToRemove = sget("\nPlease enter the brand of the bike that you would like to remove.\n").trim();
		for(var i = 0; i < this.bicycles.length; i++){
			if(bikeToRemove === this.bicycles[i].brand){
				this.bicycles[i].splice(newBike, 1);
				console.log("\nRemoving the bicycle now...\n..........................\n");	
			}
		}
	};

	this.displayInventory = function(){
		for (var i = 0; i < this.bicycles.length; i++) {
			console.log("\nBrand: " + this.bicycles[i].brand + "  Color: " + this.bicycles[i].color + "  Model: " +  this.bicycles[i].model + "  Price: " + this.bicycles[i].price + "\n");
		}
	};

	this.inventoryMenu = function(){
		var userInput = getUserInput("\nPlease tell BIMS what to do by making a choice by picking the appropriate number.\n\n1.  Display your Inventory.\n2.  Add bikes to your inventory.\n3.  Remove bikes from your inventory.\n4.  Quit BIMS\n");
		switch (userInput){
			case "1":
				this.displayInventory();
				this.inventoryMenu();
				break;

			case "2":
				this.addBicycle(getUserInput("\nPlease enter the brand.\n"), getUserInput("Please enter the color.\n"), getUserInput("Please enter the model.\n"), getUserInput("Please enter the price.\n"));
				this.inventoryMenu();
				break;

			case "3":
				//delete bike
				this.inventoryMenu();
				break;

			case "4":
				quit();
				break;

			case "":
				console.log("\nPlease make sure to enter input!\n");
				this.inventoryMenu();
				break;

			default:
				console.log("\nPlease make sure to choose a valid number.\n");
				this.inventoryMenu();
				break;
		}
	}
};



function quit(){
	console.log("\nBIMS is shutting down.\n......................\nThanks you for using the BIMS, brought to you by MCorp.\n");
	process.exit[0];
}


function getUserInput(message) {
	return sget(message).trim();
}


console.log("\nWelcome to Bicycle Inventory Management System (BIMS)!\n\nBIMS is useful for tracking your inventory, as well as adding, removing, and changing the price of your bikes.\nSmooth sailing.");

var bims = new Inventory();
bims.inventoryMenu();





