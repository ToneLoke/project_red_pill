"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Question = _interopRequireDefault(require("../models/Question"));

var _QuestionController = _interopRequireDefault(require("../controllers/QuestionController"));

var _auth = _interopRequireDefault(require("./auth"));

var router = (0, _express.Router)();
var questionCtrl = new _QuestionController["default"](_Question["default"]);
router.use(_auth["default"]);
router.route('/').get(questionCtrl.all);
router.route('/gen').get(questionCtrl.createQuestions);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=questionRoutes.js.map