//THE POINT OF THIS MODULE IS TO GIVE YOU A RANDOM NUMBER, DETERMINED BY COUNT(how many times die is rolled) AND SIDES (sides of die)

'use strict';

module.exports.randomInt = (bottom, top) => { //could just be num1, num2 (its not neccessarilty a smaller then larger number). its really count, sides

    if(!top) top = 6; //this is redundant
    return Math.floor((Math.random() * +top) + +bottom);
    // return Math.floor((Math.random() * +top) + 1); could be this  bc it eventually adds up in dice module 
    //have '+ +bottom' so that if you roll, say 3 times on a 6 sided die, you have a number between 3 and 18
}