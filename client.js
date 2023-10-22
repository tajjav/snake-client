const net = require("net");
const { IP, PORT } = require("./constants");

/**
 * connect function definition
 * @returns {Object} conn
 */
const connect = function () {
  //factory function to create connection
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.setEncoding("utf8");
  
  //send player name to server
  conn.on("connect", () => {
    conn.write("Name: TAJ");
  })

  return conn;
};

module.exports = { connect };