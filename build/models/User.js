"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var UserSchema = new _mongoose["default"].Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  games: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Game'
  }],
  completed: [String],
  firstName: String,
  lastName: String,
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  this.password = _bcrypt["default"].hashSync(this.password, 8);
  next();
}); // authenticate a user password

UserSchema.methods.authenticate = function (password) {
  var user = this;
  return _bcrypt["default"].compareSync(password, user.password);
};

var User = _mongoose["default"].model('User', UserSchema);

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=User.js.map