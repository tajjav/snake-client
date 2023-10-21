const {connect} = require("./client");
const {setupInput} = require("./input");

//connection
console.log("Connecting ...");
connect();

//setupInput
setupInput();

