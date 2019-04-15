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

/**
 * The App controller class where other controller inherits or
 * overrides pre defined and existing properties
 */
var AppController =
/*#__PURE__*/
function () {
  /**
   * @param {Model} model The default model object
   * for the controller. Will be required to create
   * an instance of the controller
   */
  function AppController(model) {
    (0, _classCallCheck2["default"])(this, AppController);

    if ((this instanceof AppController ? this.constructor : void 0) === AppController) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }

    this._model = model;
    this.create = this.create.bind(this);
    this.findOne = this.findOne.bind(this);
    this.findAll = this.findAll.bind(this);
  }

  (0, _createClass2["default"])(AppController, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(obj) {
        var newDocument, savedDocument;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                newDocument = new this._model(obj);
                _context.next = 4;
                return newDocument.save();

              case 4:
                savedDocument = _context.sent;
                return _context.abrupt("return", savedDocument);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                throw Error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "findOne",
    value: function () {
      var _findOne = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(findObj) {
        var document;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this._model.findOne(findObj);

              case 3:
                document = _context2.sent;
                return _context2.abrupt("return", document);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw Error(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function findOne(_x2) {
        return _findOne.apply(this, arguments);
      }

      return findOne;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(adminId) {
        var documents;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!adminId) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 4;
                return this._model.find({
                  adminId: adminId
                });

              case 4:
                documents = _context3.sent;
                _context3.next = 10;
                break;

              case 7:
                _context3.next = 9;
                return this._model.find();

              case 9:
                documents = _context3.sent;

              case 10:
                return _context3.abrupt("return", documents);

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", Error(_context3.t0));

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 13]]);
      }));

      function findAll(_x3) {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }]);
  return AppController;
}();

var _default = AppController;
exports["default"] = _default;
//# sourceMappingURL=AppController.js.map