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

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../../config"));

var AdminController =
/*#__PURE__*/
function (_AppController) {
  (0, _inherits2["default"])(AdminController, _AppController);

  // eslint-disable-next-line no-useless-constructor
  function AdminController(model) {
    var _this;

    (0, _classCallCheck2["default"])(this, AdminController);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AdminController).call(this, model));
    _this.login = _this.login.bind((0, _assertThisInitialized2["default"])(_this));
    _this.me = _this.me.bind((0, _assertThisInitialized2["default"])(_this));
    _this.register = _this.register.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(AdminController, [{
    key: "makeToken",
    value: function makeToken(_ref) {
      var _id = _ref._id,
          username = _ref.username,
          games = _ref.games;
      return _jsonwebtoken["default"].sign({
        _id: _id,
        username: username,
        games: games
      }, _config["default"].secret);
    }
  }, {
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var _req$body, username, password, user, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, username = _req$body.username, password = _req$body.password;

                if (!(!username || !password)) {
                  _context.next = 4;
                  break;
                }

                throw Error('missing credentials');

              case 4:
                _context.next = 6;
                return this.create({
                  username: username,
                  password: password
                });

              case 6:
                user = _context.sent;
                token = this.makeToken(user);
                return _context.abrupt("return", res.status(200).json({
                  user: user,
                  token: token,
                  message: "thanks for registering ".concat(user.username)
                }));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                req.error = {
                  message: 'cannot register user',
                  status: 500,
                  errors: _context.t0
                };
                return _context.abrupt("return", next());

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function register(_x, _x2, _x3) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res, next) {
        var _req$body2, username, password, user, token;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;

                if (!(!username || !password)) {
                  _context2.next = 4;
                  break;
                }

                throw Error('missing credentials');

              case 4:
                _context2.next = 6;
                return this._model.findOne({
                  username: username
                }).populate('games');

              case 6:
                user = _context2.sent;

                if (!user.authenticate(req.body.password)) {
                  _context2.next = 12;
                  break;
                }

                token = this.makeToken(user);
                res.status(200).json({
                  user: user,
                  token: token,
                  message: "Welcome home ".concat(user.username)
                });
                _context2.next = 13;
                break;

              case 12:
                throw Error('invalid credentials');

              case 13:
                _context2.next = 19;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);
                req.error = {
                  message: 'cannot login user',
                  status: 500,
                  errors: _context2.t0
                };
                next();

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 15]]);
      }));

      function login(_x4, _x5, _x6) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "me",
    value: function () {
      var _me = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res, next) {
        var user;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this._model.findOne({
                  username: req.decoded.username
                }).populate('games');

              case 3:
                user = _context3.sent;
                res.status(200).json(user);
                _context3.next = 11;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                req.error = {
                  message: 'cannot login user',
                  status: 500,
                  errors: _context3.t0
                };
                next();

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function me(_x7, _x8, _x9) {
        return _me.apply(this, arguments);
      }

      return me;
    }()
  }]);
  return AdminController;
}(_AppController2["default"]);

var _default = AdminController;
exports["default"] = _default;
//# sourceMappingURL=UserController.js.map