let connection;

const setupInput = function (conn) {
  connection = conn;
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
  if (key == "w") {
    connection.write("Move: up")
  }
  if (key == "a") {
    connection.write("Move: left")
  }
  if (key == "s") {
    connection.write("Move: down")
  }
  if (key == "d") {
    connection.write("Move: right")
  }
  if (key == "o") {
    connection.write("Say: Get out the way!")
  } 
};

module.exports = {
  setupInput
}