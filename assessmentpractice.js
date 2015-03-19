/*

QuizQuestion. QuizQuestion should include variables to hold a question and an answer. 

ScoreKeeper. ScoreKeeper should hold the quiz score and should include methods to increase the score (if the user gets a question right) or decrease the score (if the user gets a question wrong).

Quiz, which should a collection of QuizQuestions and a ScoreKeeper object.

Your program should allow the user to create and then take their quiz.

*/

var sget = require('sget');


var Quiz = function(){

	this.quizQuestions =[]; //somehow push the questions and answers into here


		this.isQuestionCorrect = function(){
			if (questionAnswer){

			}
		}
}



var ScoreKeeper = function() {

	this.quizScore = 0;

	this.increaseScore = function(){

	}

	this.decreaseScore = function(){

	}
}


var QuizQuestions = function (question, answer) {
	this.question = question;
	this.answer = answer;

	this.getQuestionandAnswer = function(){

		question = sget("\nPlease enter your question now.\n");
		answer = sget("\nPlease enter your anwer now.\n");

	}


}



function quizMenu(){
	var userInput = sget("Please make a choice by picking the appropriate number.\n1.  Create a quiz question and answer.\n2.  Take your quiz so far.\n3.  Quit this program\n").trim();
	switch (userInput){
		case "1":
			QuizQuestions.getQuestionandAnswer();  //ned to figure out why this isn't calling the functin right...
			quizMenu();
			break;

		case "2":

			break;

		case "":
			console.log("\nPlease make sure to enter input!\n");
			quizMenu();
			break;

		default:
			console.log("\nPlease make sure to choose a valid number.\n");
			quizMenu();
			break;
		}
}


console.log("\nWelcome to the quiz maker!\n  Here you can create a custom quiz with your set of questions and answers, and then take the quiz and see your score!\n")
quizMenu();
