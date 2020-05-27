const WebSocket = require("ws");

function WSUtils(){
  wsu = {};
  
  wsu.setupWS = (server)=> {
    console.log("Web socket setup");
    const wss = new WebSocket.Server({server});
    wss.on("connection", () => {
      console.log("New Connection");
    });
  };
  return wsu;
}

module.exports = WSUtils();