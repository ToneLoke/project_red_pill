"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../../config"));

var secret = _config["default"].secret;

var token_auth = function token_auth(req, res, next) {
  // LOOK FOR TOKEN IN 3 LOCATIONS BODY OBJECT PARAMETER KEY OR HEADER OBJECT
  var authorization = req.headers.authorization;
  var token = authorization ? authorization.split(' ')[1] : false; // IF A TOKEN EXISTS SEND THE DECODED INFORMATION

  if (req.error) return next();

  if (token) {
    _jsonwebtoken["default"].verify(token, secret, function (err, tokenData) {
      if (err) return res.status(401).json({
        message: 'invalid credentials',
        success: false
      });else {
        req.decoded = tokenData;
        return next();
      }
    });
  } else {
    return res.status(401).json({
      message: 'please login',
      success: false
    });
  }
};

var _default = token_auth;
exports["default"] = _default;
//# sourceMappingURL=auth.js.map