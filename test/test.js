const { assert } = require("chai");

describe("Array", () => {
    let testArr = [1,2,3] //do this instead of writing array in 'assert'
  describe("indexOf()", () => {
//   describe.skip("indexOf()", () => { can do skip instead of commented out if don't wanna run test
    it("should be equal to -1", () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });

  describe("length", () => {
    it("should not be 0", () => {
    //   assert.notEqual(0, [1, 2, 3].length);
    assert.notEqual(0, testArr.length); //can assert multiple times
    assert.equal(3, testArr.length);
    });
  });
});
