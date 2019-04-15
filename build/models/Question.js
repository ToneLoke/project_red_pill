"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var QuestionSchema = new _mongoose["default"].Schema({
  question: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    "enum": ['easy', 'hard', 'medium'],
    "default": 'easy'
  },
  maxTime: {
    type: Number,
    required: true,
    "default": 50
  },
  type: {
    type: String,
    "enum": ['multiple', 'switch', 'order']
  },
  choices: Array,
  answers: Array,
  points: Number
}, {
  timestamps: true
});

var Question = _mongoose["default"].model('Question', QuestionSchema);

var _default = Question;
exports["default"] = _default;
//# sourceMappingURL=Question.js.map