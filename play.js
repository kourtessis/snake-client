const net = require("net");
const {connect} = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // your code here register it as the "data" callback handler for stdin.
  if (key === '\u0003') {
    process.exit();
  }
};