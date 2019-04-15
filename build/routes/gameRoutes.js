"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _express = require("express");

var _Game = _interopRequireDefault(require("../models/Game"));

var _GameController = _interopRequireDefault(require("../controllers/GameController"));

var _auth = _interopRequireDefault(require("./auth"));

function _default(io) {
  var router = (0, _express.Router)();
  var gameCtrl = new _GameController["default"](_Game["default"], io);
  gameCtrl.setLiveGames();
  router.use(_auth["default"]);
  router.route('/').post(gameCtrl.makeGame).get(gameCtrl.all);
  router.route('/:id').put(gameCtrl.update);
  return router;
}
//# sourceMappingURL=gameRoutes.js.map