const {MOVE_KEYS, msgKeyMappings} = require("./constants");
let connection;
const stdout = process.stdout;
const stdin = process.stdin;
const preGreet = "Say: ";
const handleUserInput = function(key) {
  
  if (key === '\u0003') {
    stdout.write("Exiting the game!");
    process.exit();
  }
  if (key === 'w') {
    connection.write(MOVE_KEYS.w);
  }
  if (key === 'a') {
    connection.write(MOVE_KEYS.a);
  }
  if (key === 's') {
    connection.write(MOVE_KEYS.s);
  }
  if (key === 'd') {
    connection.write(MOVE_KEYS.d);
  }
  if (key === ',') {
    connection.write(preGreet + msgKeyMappings[","]);
  }
  if (key === '.') {
    connection.write(preGreet + msgKeyMappings["."]);
  }
}

const setupInput = function(conn) {
  
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;

  connection.on("connect", handleUserInput);
  return stdin;
}

module.exports = {setupInput};

//Test Code
//setupInput();