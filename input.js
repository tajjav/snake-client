const { MOVE_KEYS, msgKeyMappings } = require("./constants");

let connection;
const stdout = process.stdout;
const stdin = process.stdin;
const preGreet = "Say: ";

/**
 * handleUserInput function definition
 * @param {key} key 
 */
const handleUserInput = function (key) {
  // ctrl + c to exit
  if (key === '\u0003') {
    stdout.write("Exiting the game!\n");
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
  //send special message to server with key down
  if (key === ',') {
    connection.write(preGreet + msgKeyMappings[","]);
  }
  if (key === '.') {
    connection.write(preGreet + msgKeyMappings["."]);
  }
}

/**
 * setupInput function definition, takes in connection object and send event handler output to server 
 * @param {Object} conn 
 * @returns {Object} stdin
 */
const setupInput = function (conn) {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;

  connection.on("connect", handleUserInput);
  return stdin;
}

module.exports = { setupInput };