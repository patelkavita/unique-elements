const utils = require('../lib/utils.js');
const assertions = require('../lib/assertions.js');

const assert = assertions.assert;
const printHeadLine = utils.printHeadLine;
const areEqual = assertions.areEqual;

const it = function (testName, testData) {
  assert(testData.expected, testData.actual, testName);
};

const testAreEqual = function() {
  printHeadLine("\n areEqual");

  it("should be true when both list are empty", {
    actual: areEqual([], []),
    expected: true,
  });

  it("should be true when 2 and 2 are provided", {
    actual: areEqual(2, 2),
    expected: true,
  });

  it("should be true when [1] and [1] is provided", {
    actual: areEqual([1], [1]),
    expected: true,
  });


  it("should be false when both list have different value but same length", {
    actual: areEqual([1], [2]),
    expected: false,
  });

  it("should be true when [1, 2] and [1, 2] is provided", {
    actual: areEqual([1, 2], [1, 2]),
    expected: true,
  });

  it("should be true when [1, 2, [2, 3]] and [1, 2, [2, 3]] is provided", {
    actual: areEqual([1, 2, [2, 3]], [1, 2, [2, 3]]),
    expected: true,
  });

  it("should be true when [1, 2, [2, [3, [4]]]] and [1, 2, [2, [3, [4]]]] is provided", {
    actual: areEqual([1, 2, [2, [3, [4]]]], [1, 2, [2, [3, [4]]]]),
    expected: true,
  });

  it("should be true for single lable object if both are equal", {
    actual: areEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c:3}),
    expected: true,
  });

  it("should be false for single lable object if keys are not same", {
    actual: areEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, d:3}),
    expected: false,
  });

  it("should be false for single lable object if keys are same but values are different", {
    actual: areEqual({a: 1, b: 2, c: 3}, {a: 1, b: 2, c:4}),
    expected: false,
  });

  it("should be true when object inside object is provided and both are equal", {
    actual: areEqual({a: 1, b: 2, c: {m: 1, n: 2, o: 3}}, {a: 1, b: 2, c: {m: 1, n: 2, o: 3}}),
    expected: true,
  });

  it("should be true when array inside object is provided and both are equal", {
    actual: areEqual({a: 1, b: 2, c: [1, 2, 3]}, {a: 1, b: 2, c: [1, 2, 3]}),
    expected: true,
  });

  it("should be true when object is provided inside array and both are equal", {
    actual: areEqual([{a: 1, b: 2, c: 3}], [{a: 1, b: 2, c: 3}]),
    expected: true,
  });

  it("should be false when object and array are compared with same value", {
    actual: areEqual({a: 1, b: 2, c: 3}, [ 1, 2, 3]),
    expected: false,
  });
}

testAreEqual();
assertions.getSummary();
