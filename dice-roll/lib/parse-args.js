// module.exports.parseArgs = (array) => {
//     let dice = {
//         count: 1,
//         sides: 6
//     }
//     // if (array[1] 
//     console.log(array);


// }

'use strict';
// no need for function name bc its an anonymous function
module.exports = ([num, sides]) => { //this is destructuring of an array, instead of like give me array[0] and array[1], etc.
    const dieNums = {};
    dieNums.count = sides ? num : 1;
    // if sides exist, then assign num to the count. if not, assign 1 
    // like
    // if (sides) { //this is saying if sides exists
    //     dieNums.count = num;
    // } else dieNums.count = 1;
    // HOW ELSE COULD I WRITE THIS WITH IF STATEMENTS?
    dieNums.sides = sides || num || 6; // WHY DO I USE || AND NOT ? HERE?????
    // if sides exists its gonna be sides, but if doesn't its gonna be num, but if no num, its 6
    
    // not exactly the same, but essentially like writing it like this: 
    // if (count && sides) return s; //don't need curly brackets if just have one statement inside of block
    // else return sides ? sides : 6;
    return dieNums
}
