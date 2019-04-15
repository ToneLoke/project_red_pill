"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _AppController2 = _interopRequireDefault(require("./AppController"));

var LiveController =
/*#__PURE__*/
function (_AppController) {
  (0, _inherits2["default"])(LiveController, _AppController);

  // eslint-disable-next-line no-useless-constructor
  function LiveController(model, io, id) {
    var _this;

    (0, _classCallCheck2["default"])(this, LiveController);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LiveController).call(this, model));
    _this.gameId = id;
    _this.io = io;
    _this.connected = _this.connected.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateGame = _this.updateGame.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(LiveController, [{
    key: "connected",
    value: function () {
      var _connected = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(socket) {
        var game;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this._model.findOne({
                  _id: this.gameId
                }).populate('adminId').populate('questions');

              case 3:
                game = _context.sent;
                console.log(game.adminId._id);
                if (socket.user._id != game.adminId._id) game.addPlayer(socket.user);
                this.io.emit('NEW_PLAYER', socket.user.username);
                this.io.emit('connected', game);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log('ERROR', _context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function connected(_x) {
        return _connected.apply(this, arguments);
      }

      return connected;
    }()
  }, {
    key: "updateGame",
    value: function () {
      var _updateGame = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(update) {
        var game;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._model.findOneAndUpdate({
                  _id: this.gameId
                }).populate('adminId').populate('questions');

              case 2:
                game = _context2.sent;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateGame(_x2) {
        return _updateGame.apply(this, arguments);
      }

      return updateGame;
    }()
  }]);
  return LiveController;
}(_AppController2["default"]);

var _default = LiveController;
exports["default"] = _default;
//# sourceMappingURL=LiveController.js.map