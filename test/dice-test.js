"use strict";

const { assert: { isFunction, isNumber, oneOf } } = require("chai");
const { roll, toDiceNotation } = require("../dice-roll/lib/dice");

describe("dice module", () => {
  describe("roll", () => {
    it("should be a function", () => {
      isFunction(roll);
    });

    it("should return a number", () => {
      //   isNumber(roll("1","6")); //this works for some reason, but should be one below bc function 'roll' only takes one argument
      isNumber(roll("1d20"));
    });

    //HAVE NO IDEA WHAT THIS NEXT ONE IS DOING
    it("should accept a string and return a computed number", () => {
      for (let i = 0; i < 10; i++) {
        let diceNotation = `${i}d6`;
        oneOf(roll(diceNotation), Array.from(Array(61).keys())); //Array.from ('from' is a method on 'Array')allows you to create an array
      }
    });
  });
});
