// Created by: Emma Janani
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the factorial of the user's number
 */
function factorialOfNumber() {
  // initialize the counter and facNumber
	let counter = 1;

  // initialize the facNumber display
  let facNumber = 1;

	// get the user number
	let userNum = parseInt(document.getElementById('userNum').value)	
  
	// use a do..while loop to create the factorial display
	do {
		// build the string of sentences
		facNumber = facNumber * counter + "<br>"
		
		//increment the counter
		counter = counter + 1
	} while (counter <= userNum)

  	// return the string of sentences back to html
  	document.getElementById('display-results').innerHTML = facNumber
}
