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

var QuestionController =
/*#__PURE__*/
function (_AppController) {
  (0, _inherits2["default"])(QuestionController, _AppController);

  // eslint-disable-next-line no-useless-constructor
  function QuestionController(model) {
    var _this;

    (0, _classCallCheck2["default"])(this, QuestionController);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(QuestionController).call(this, model));
    _this.all = _this.all.bind((0, _assertThisInitialized2["default"])(_this));
    _this.createQuestions = _this.createQuestions.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(QuestionController, [{
    key: "all",
    value: function () {
      var _all = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var questions;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.findAll();

              case 3:
                questions = _context.sent;
                res.status(200).json(questions);
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                req.error = {
                  message: 'cannot retrieve all questions',
                  status: 500,
                  errors: _context.t0
                };
                next();

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function all(_x, _x2, _x3) {
        return _all.apply(this, arguments);
      }

      return all;
    }()
  }, {
    key: "createQuestions",
    value: function () {
      var _createQuestions = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res, next) {
        var questions, promiseQuestions, qs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                questions = [{
                  question: "A SELLING OBJECTION is when a customer says 'No' to buying the vehicle.",
                  type: 'switch',
                  choices: ['true', 'false'],
                  answers: [0],
                  points: 50,
                  difficulty: 'medium',
                  maxTime: 100
                }, {
                  question: 'An OBJECTION is:',
                  type: 'multiple',
                  choices: ['A reason or argument presented in opposition', 'A statement of opposition to an aspect of a judicial or other legal proceeding', 'A feeling or expression of disapproval', 'All of the Above', 'None of the above'],
                  answers: [3],
                  points: 75,
                  difficulty: 'medium'
                }, {
                  question: 'A SELLING PARTY is illegal.',
                  type: 'switch',
                  choices: ['true', 'false'],
                  answers: [0],
                  points: 100,
                  maxTime: 120
                }]; //create promise array to create all questions

                promiseQuestions = questions.map(this.create);
                _context2.prev = 2;
                _context2.next = 5;
                return Promise.all(promiseQuestions);

              case 5:
                qs = _context2.sent;
                res.status(200).json(qs);
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                req.error = {
                  message: 'cannot create questions',
                  status: 500,
                  errors: _context2.t0
                };
                next();

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 9]]);
      }));

      function createQuestions(_x4, _x5, _x6) {
        return _createQuestions.apply(this, arguments);
      }

      return createQuestions;
    }()
  }]);
  return QuestionController;
}(_AppController2["default"]);

var _default = QuestionController;
exports["default"] = _default;
//# sourceMappingURL=QuestionController.js.map