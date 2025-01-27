/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. THIS in the global scope pertains to everything in the window. 
    This happens when this is not assigned to a particular context.

* 2. In Implicit binding of "this" applies to objects with methods. The left side 
of the dot will point to object "this" is targetting.

* 3. New Binding: When New binding is used it creates a new object which inherits the constructor of the previous object.
The 'this' will then target the new object made.


* 4. Explicit key word uses specifically call, apply or bind to tell the function
 where this is targetting. Call immediately passes data to refer to
  to be used by the function.
 Bind makes a brand new function that you can use later.
*
* write out a code example of each explanation above
*/

// Principle 1
//the example below will give a console result of undefined
// code example for Window Binding
//pls uncomment code to check individually
// "use strict";

// function dog() {
// 	console.log(this.sound);
// }
// var sound = "woof";

// dog();

// Principle 2
// code example for Implicit Binding
let restoOne = {
	name: "Brutus",
	type: "American",
	specialty: "burger",
	eat: function() {
		console.log(
			`${this.name} is an ${this.type} restaurant and specializes in ${this.specialty}.`
		);
	}
};
restoOne.eat();
// Principle 3
// code example for New Binding
function Food(attrib) {
	(this.newName = attrib.name), (this.newTaste = attrib.taste);
	console.log(this);
}
const foodOne = new Food({
	name: "orange",
	taste: "sour"
});
// Principle 4
// code example for Explicit Binding
//example of using .call
function dog() {
	console.log(this.sound);
}
let myDog = {
	name: "Falcor",
	sound: "woof"
};
dog.call(myDog);

//example for bind
function resto() {
	console.log(this.specialty);
}
let restoThree = {
	name: "Fushun",
	specialty: "dimsum"
};
faveResto = resto.bind(restoThree);
faveResto();
