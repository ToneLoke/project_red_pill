"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _User = _interopRequireDefault(require("../models/User"));

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

var _auth = _interopRequireDefault(require("./auth"));

var router = (0, _express.Router)();
var userCtrl = new _UserController["default"](_User["default"]);
router.route('/register').post(userCtrl.register);
router.route('/login').post(userCtrl.login);
router.use(_auth["default"]);
router.get('/me', userCtrl.me);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=userRoutes.js.map