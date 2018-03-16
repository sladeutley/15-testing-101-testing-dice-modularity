"use strict";

const { assert: { isFunction, isNumber, oneOf } } = require("chai");
const parseArgsFunction = require("../dice-roll/lib/parse-args");

describe("parse-args module", () => {
  describe("parse-args", () => {
    it("should be a function", () => {
      isFunction(parseArgsFunction);
    });

    // it()
  });
});
