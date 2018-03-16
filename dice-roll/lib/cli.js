//get to be able to do it globally
'use strict'

//THIS EXERCISE IS NOT THE MOST EFFICIEnT WAY, BUT HELPS LEARN ABOUT REQUIRING MODULES AND DESTRUCTURING OBJECTS AND ARRAYS

process.title = 'Dice Roll'; //a thing you can do in node to name the process

const {argv: [,, ...args]} = process; //this is destructuring saying we want everything after the first two items in the array of process.argv, and setting it to variable args which is an array
const {count, sides} = require('./parse-args')(args);
// has to called 'count' and 'sides' because those are the names of the properties on the object we're returning
const dieObj = require('./parse-args.js')(args);
console.log('dieObj',dieObj);
// const {count, sides} = require('./parse-args').parseArgs(args);
// could be this if you name the function in './parse-args' instead of it being an anonymous function

const {roll, toDiceNotation} = require('./dice');

// console.log("args", args, "count", count, "sides", sides)

const dice = toDiceNotation({count, sides}); // this is where you convert to a string, and pass the string below to roll function
const total = roll(dice);
// AND thiS IS THE MAIN POINT OF THIS APP, TO CONSOLE OUT TOTAL
console.log("total", total);