const GameModel = require("./models/Game");
const LiveController = require("./controllers/LiveController");
//======================= CONFIGURE SOCKET FOR EACH PUBLISHED GAME =======================

module.exports = function setupGameSocket(gameIO, id) {
  const liveCtrl = new LiveController(GameModel, gameIO, id);
  //TODO: add security for sockets via io.use
  gameIO.use((socket, next) => {
    let { _id, username } = socket.handshake.query;
    if (_id && username) {
      socket.user = { _id, username };
      return next();
    } else {
      console.log("FAILED");
      return next(new Error("no user in socket"));
    }
  });

  gameIO.on("connection", socket => {
    liveCtrl.connected(socket);
    socket.on("LIVE_GAME_UPDATE", data => {
      console.log("UPDATING LIVE GAME", data);
      liveCtrl.updateGame(data);
    });
    socket.on("LIVE_GAME_PLAYER_UPDATE", data => {
      console.log("UPDATING LIVE PLAYER", data);
      gameIO.emit("LIVE_GAME_PLAYER_UPDATED", data);
      //TODO: decide what and when player info should be saved.
      // liveCtrl.updatePlayer(data);
    });
  });
};
