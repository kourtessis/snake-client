const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541// PORT number here,
  });
  
    conn.on("connect", () => {
      console.log("Welcome to the game") // code that does something when the connection is first established
    });
    conn.on("data", (data) => {
      console.log(data) 
    });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn; 
};

console.log("Connecting ...");
connect();


module.exports = {
  connect
}