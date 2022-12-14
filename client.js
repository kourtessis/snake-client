const { IP, PORT } = require("./constants");

const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });
  
    conn.on("connect", () => {
      console.log("Welcome to the game") // code that does something when the connection is first established
    });
    conn.on("connect", () => {
      conn.write("Name: KVK") 
    });

    // conn.on("connect", () => {
    //   conn.write("Move: up") 
    // });

    conn.on("data", (data) => {
      console.log(data) 
    });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn; 
};

module.exports = {
  connect
}