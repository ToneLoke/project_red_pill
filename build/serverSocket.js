"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setupGameSocket;

var _Game = _interopRequireDefault(require("./models/Game"));

var _LiveController = _interopRequireDefault(require("./controllers/LiveController"));

//======================= CONFIGURE SOCKET FOR EACH PUBLISHED GAME =======================
function setupGameSocket(gameIO, id) {
  var liveCtrl = new _LiveController["default"](_Game["default"], gameIO, id); //TODO: add security for sockets via io.use

  gameIO.use(function (socket, next) {
    var _socket$handshake$que = socket.handshake.query,
        _id = _socket$handshake$que._id,
        username = _socket$handshake$que.username;

    if (_id && username) {
      socket.user = {
        _id: _id,
        username: username
      };
      return next();
    } else {
      console.log('FAILED');
      return next(new Error('no user in socket'));
    }
  });
  gameIO.on('connection', function (socket) {
    liveCtrl.connected(socket);
    socket.on('LIVE_GAME_UPDATE', function (data) {
      if ('status' in data) {
        gameIO.emit('GAME_UPDATED', data);
      } else {
        liveCtrl.updateGame(data);
      }
    }); //add player to game roster
  });
}
//# sourceMappingURL=serverSocket.js.map