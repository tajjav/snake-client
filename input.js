const { UPKEY, DOWNKEY, LEFTKEY, RIGHTKEY, msgKeyMappings } = require("./constants");

let connection;
let autoMove;
const preGreet = "Say: ";

/**
 * setupInput function definition, takes in connection object and send event handler output to server 
 * @param {Object} conn 
 * @returns {Object} stdin
 */
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
}

/**
 * handleUserInput function definition
 * @param {key} key 
 */
const handleUserInput = function (key) {
  const stdout = process.stdout;
   // ctrl + c to exit
   if (key === '\u0003') {
    stdout.write("Exiting the game!\n");
    process.exit();
  }
  
  //auto move snake
  const interval = function(key) {
    autoMove = setInterval(() => {
      connection.write(key);
    }, 150);
  };
  //change directions
  if (key === 'w') {
    clearInterval(autoMove);
    interval(UPKEY);
  }
  if (key === 'a') {
    clearInterval(autoMove);
    interval(LEFTKEY);
  }
  if (key === 's') {
    clearInterval(autoMove);
    interval(DOWNKEY);
  }
  if (key === 'd') {
    clearInterval(autoMove);
    interval(RIGHTKEY);
  }
  //send special message to server with key down
  if (key === ',') {
    connection.write(preGreet + msgKeyMappings[","]);
  }
  if (key === '.') {
    connection.write(preGreet + msgKeyMappings["."]);
  }
}

module.exports = { setupInput };