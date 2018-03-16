'use strict';

const { randomInt } = require('./math'); //whenever you module.exports, the function (or variable) is a property on the module.exports object, and that's why it has to be in curly brackets

// dicenotation is something like "3d20"
module.exports.roll = (diceNotation) => {
    let [rollCount, sides] = diceNotation.split("d"); //splitting string and assigning first number of array to rollCount and second number to sides
    let diceTotal = 0;

    for (let i=0; i < rollCount; i++) {
        diceTotal += randomInt(1, sides); // this is giving a random number between 1 and the sides you give it. the loop is determined by how many times the count is run
    }
    return diceTotal;
};

module.exports.toDiceNotation = ({count, sides}) => `${count}d${sides}`
//exporting a function that takes count and sides(the properties on an anonymous object) and turns it into a string, which is split on 'd', which you are actually passing through the roll function