'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = require("mongoose");

var _Question = _interopRequireDefault(require("./Question"));

var PlayerSchema = new _mongoose.Schema({
  _id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  username: String,
  score: {
    type: Number,
    "default": 0
  },
  answers: [{
    q_id: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    },
    submission: [String]
  }]
});
var GameSchema = new _mongoose.Schema({
  adminId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  players: [PlayerSchema],
  title: {
    type: String,
    required: true
  },
  qNum: {
    type: Number,
    "default": 0
  },
  questions: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }],
  totalPoints: {
    type: Number,
    "default": 0,
    min: 0
  },
  status: {
    type: String,
    "enum": ['live', 'done', 'draft', 'pause'],
    "default": 'draft',
    index: true
  }
}, {
  timestamps: true
});

var preSave =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(next) {
    var questions, qs;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!this.isModified('questions')) {
              _context.next = 6;
              break;
            }

            questions = this.questions.map(function (_id) {
              return _Question["default"].findOne({
                _id: _id
              }).select('points -_id');
            });
            _context.next = 4;
            return Promise.all(questions);

          case 4:
            qs = _context.sent;
            this.totalPoints = qs.reduce(function (prev, cur) {
              return prev + cur.points;
            }, 0);

          case 6:
            next();

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function preSave(_x) {
    return _ref.apply(this, arguments);
  };
}();

GameSchema.pre('save', preSave);

var addPlayer =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(player) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            this.players = this.players.find(function (p) {
              return p._id == player._id;
            }) ? this.players : [].concat((0, _toConsumableArray2["default"])(this.players), [player]);
            _context2.next = 3;
            return this.save();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function addPlayer(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

GameSchema.methods.addPlayer = addPlayer;
var Game = (0, _mongoose.model)('Game', GameSchema);
var _default = Game;
exports["default"] = _default;
//# sourceMappingURL=Game.js.map