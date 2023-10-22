const { connect } = require("./client");
const { setupInput } = require("./input");

//connection
console.log("Connecting ...");
let conn = connect();

//setupInput
setupInput(conn);