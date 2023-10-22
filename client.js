const net = require("net");
const {IP, PORT} = require("./constants");

const connect = function () {
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
  conn.on("connect", () => {
    conn.write("Name: TAJ");
  })

  // conn.on("connect", () => {
  //   conn.write("Move: up");
  //   setTimeout(() => {conn.write("Move: up");},50);
  //   setTimeout(() => {conn.write("Move: up");},50);
  //   setInterval(() => {conn.write("Move: up");},50);
  //   conn.write("Move: left");
  //   conn.write("Move: left");
  //   conn.write("Move: down");
  //   conn.write("Move: down");
  //   conn.write("Move: right");
  // })

  return conn;
};

module.exports = {connect};