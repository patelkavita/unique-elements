const assertions = require('../lib/assertions.js');
const utils = require('../lib/utils.js');
const source = require('../src/unique-elements-A2.js');

const assert = assertions.assert;
const printHeadLine = utils.printHeadLine;
const getUniqueElement = source.getUniqueElement;

const it = function (testName, testData) {
  assert(testData.expected, testData.actual, testName);
};
const testGetUniqueElement = function() {
  printHeadLine("\ngetUniqueElement");

  it("should give nothing if nothing is provided", {
    actual: getUniqueElement(),
    expected: [],
  });

  it("should return that element if only one element is provided in list", {
    actual: getUniqueElement("a"),
    expected: ["a"],
  });

  it("should give unique elements if list has same elements with multiple occurance", {
    actual: getUniqueElement(1, 2, 3, 2, 1, 4, 2, 4),
    expected: [1, 2, 3, 4],
  });
}

testGetUniqueElement();
assertions.getSummary();
