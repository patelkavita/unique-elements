const utils = require("../lib/utils.js");
const red = utils.red;
const green = utils.green;
const printHeadLine = utils.printHeadLine;
const blue = utils.blue;

const display = function(text){
  console.log(text);
}

const isObject = function(parameter) {
  return typeof parameter === 'object' && !Array.isArray(parameter);
}

const areObjectsEqual = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }

  const keys = Object.keys(object1);

  return keys.every(function(key) { 
    return areEqual(object1[key], object2[key])
  });
}

const areArraysEqual = function(array1, array2) {
  if(array1.length !== array2.length){
    return false;
  }

  return array1.every(function(element, index) { 
    return areEqual(array1[index], array2[index])
  });
}

const areEqual = function(a, b) {
  if(a === b) {
    return true;
  }

  if([a, b].every(Array.isArray)) {
    return areArraysEqual(a, b);
  }

  if([a, b].every(isObject)) {
    return areObjectsEqual(a, b);
  }

  return false;
}

let totalTest = 0;
let passedTest = 0;

const passedMessage = function(expected, actual, message) {
  const passMessage = "	✅ " + message;

  return passMessage;
}

const failedMessage = function(expected, actual, message) {
  let failMessage = "	❌ " + message;

  failMessage += green("\n     Expected : ") + expected;
  failMessage += red("\n       Actual : ") + actual;

  return failMessage;
}

const assert = function(expected, actual, message) {
  const result = areEqual(expected, actual);
  if(result) {
    passedTest += 1;
  }

  const passMessage = passedMessage(expected, actual, message);
  const failMessage = failedMessage(expected, actual, message);
  totalTest += 1;
  display(result ? passMessage : failMessage);
}

const getSummary = function() {
  console.log(blue("\n Summary : "), passedTest + "/" + totalTest, "test passed");
}

exports.assert = assert;
exports.getSummary = getSummary;
exports.printHeadLine = printHeadLine;
exports.areEqual = areEqual;
