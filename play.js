const net = require("net");
const {connect} = require("./client");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost",// IP address here,
//     port: 50541// PORT number here,
//   });
  
//     conn.on("connect", () => {
//       console.log("Welcome to the game") // code that does something when the connection is first established
//     });
//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn; 
// };

// console.log("Connecting ...");
// connect();
