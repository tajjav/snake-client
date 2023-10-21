const net = require("net");

const server = net.createServer();

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

server.on("connection", (client) => {
  console.log("New client connected!");

  client.setEncoding("utf8"); // interpret data as text
  
  client.write("Hello from the server!");

  client.on("data", (data) => {
    console.log("Message from client: ", data);
  });
});
