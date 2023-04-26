const formatting = function(code, text) {
  return "\033[" + code + "m" + text + "\033[0m";
}

const underline = function(string) {
  return formatting(4, string);
}

const bold = function(string) {
  return formatting(1, string);
}

const italic = function(string) {
  return formatting(3, string);
}

const yellow = function(string) {
  return formatting(33, string);
}

const red = function(string) {
  return formatting(31, string);
}

const green = function(string) {
  return formatting(32, string);
}

const blue = function(string) {
  return formatting(34, string);
}

const printHeadLine = function(string) {
  console.log(underline(bold(italic(yellow(string)))));
}

exports.printHeadLine = printHeadLine;
exports.green = green;
exports.red = red;
exports.blue = blue;
