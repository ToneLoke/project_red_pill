"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _AppController2 = _interopRequireDefault(require("./AppController"));

var _serverSocket = _interopRequireDefault(require("../serverSocket"));

var _User = _interopRequireDefault(require("../models/User"));

var GameController =
/*#__PURE__*/
function (_AppController) {
  (0, _inherits2["default"])(GameController, _AppController);

  // eslint-disable-next-line no-useless-constructor
  function GameController(model, io) {
    var _this;

    (0, _classCallCheck2["default"])(this, GameController);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(GameController).call(this, model));
    _this._io = io;
    _this.all = _this.all.bind((0, _assertThisInitialized2["default"])(_this));
    _this.makeGame = _this.makeGame.bind((0, _assertThisInitialized2["default"])(_this));
    _this.update = _this.update.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setLiveGames = _this.setLiveGames.bind((0, _assertThisInitialized2["default"])(_this));
    _this.createStream = _this.createStream.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(GameController, [{
    key: "createStream",
    value: function createStream(game) {
      var gameIO = this._io.of("/".concat(game._id));

      (0, _serverSocket["default"])(gameIO, game._id);
    }
  }, {
    key: "setLiveGames",
    value: function () {
      var _setLiveGames = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var liveGames;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this._model.find({
                  status: 'live'
                });

              case 3:
                liveGames = _context.sent;
                console.log('=============================FOUND LIVE GAMES', liveGames.length);
                liveGames.forEach(this.createStream);
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log('==========Error setting live games================');
                console.error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function setLiveGames() {
        return _setLiveGames.apply(this, arguments);
      }

      return setLiveGames;
    }()
  }, {
    key: "all",
    value: function () {
      var _all = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res, next) {
        var games;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this._model.find({
                  status: 'live'
                }).populate('games').where('adminId').ne(req.decoded._id).populate('adminId');

              case 3:
                games = _context2.sent;
                res.status(200).json(games);
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                req.error = {
                  message: 'error finding games for admin',
                  status: 500,
                  errors: _context2.t0
                };
                next();

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function all(_x, _x2, _x3) {
        return _all.apply(this, arguments);
      }

      return all;
    }()
  }, {
    key: "makeGame",
    value: function () {
      var _makeGame = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res, next) {
        var adminId, newGame, game, admin;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                adminId = req.decoded._id;
                newGame = (0, _objectSpread2["default"])({}, req.body, {
                  adminId: adminId
                });
                _context3.next = 5;
                return this.create(newGame);

              case 5:
                game = _context3.sent;
                _context3.next = 8;
                return _User["default"].findOne({
                  _id: adminId
                });

              case 8:
                admin = _context3.sent;
                if (admin.games) admin.games.push(game._id);else admin.games = [game._id];
                _context3.next = 12;
                return admin.save();

              case 12:
                res.status(200).json(game);
                _context3.next = 19;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](0);
                req.error = {
                  message: 'error creating a game for admin',
                  status: 500,
                  errors: _context3.t0
                };
                next();

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 15]]);
      }));

      function makeGame(_x4, _x5, _x6) {
        return _makeGame.apply(this, arguments);
      }

      return makeGame;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res, next) {
        var gameId, keys, game;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                // const adminId = req.decoded._id;
                gameId = req.params.id;
                keys = ['__v', '_id', 'createdAt', 'updatedAt'];
                keys.forEach(function (key) {
                  delete req.body[key];
                });

                if (gameId) {
                  _context4.next = 6;
                  break;
                }

                throw Error('need a valid game id');

              case 6:
                _context4.next = 8;
                return this._model.findOne({
                  _id: gameId
                }).populate('questions');

              case 8:
                game = _context4.sent;
                Object.keys(req.body).forEach(function (key) {
                  // console.log("key:", key)
                  game[key] = req.body[key];
                });
                _context4.next = 12;
                return game.save();

              case 12:
                if (game.status === 'live') {
                  console.log('CREATING STREAM');
                  this.createStream(game._id);
                }

                res.status(200).json(game);
                _context4.next = 20;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](0);
                req.error = {
                  message: 'cannot update game',
                  status: 500,
                  errors: _context4.t0
                };
                next();

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 16]]);
      }));

      function update(_x7, _x8, _x9) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);
  return GameController;
}(_AppController2["default"]);

var _default = GameController;
exports["default"] = _default;
//# sourceMappingURL=GameController.js.map