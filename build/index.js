"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _fs = _interopRequireDefault(require("fs"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("../config"));

var _gameRoutes = _interopRequireDefault(require("./routes/gameRoutes"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _questionRoutes = _interopRequireDefault(require("./routes/questionRoutes"));

// =====START GLOBAL VAR DECLARATION=====
// import "@babel/polyfill";
var mongodb_url = _config["default"].mongolabs || 'mongodb://localhost/project_red_pill';
var port = process.env.PORT || 8000;
var app = (0, _express["default"])();

var server = require('http').Server(app);

var io = require('socket.io')(server); // =======================================
// CONNECT TO LOCAL MONGO DB OR MONGOLABS


_mongoose["default"].connect(mongodb_url, function (err) {
  if (err) console.log(err);
  console.log('Connected to MongoDB');
}); // =======================================
// SETUP MIDDLEWARE FOR API


app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])()); // =======================================
// Initialize routes to use

app.use('/', _userRoutes["default"]); //======================= pass the io server to game routes to create sockets =======================

app.use('/games', (0, _gameRoutes["default"])(io));
app.use('/questions', _questionRoutes["default"]);
app.use(function (req, res) {
  //======================= ERROR IN ROUTE =======================
  console.log('=========================SERVER ERROR:');
  console.error(req.error);
  res.status(req.error.status).json(req.error);
});
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client/build'))); //PROD mode

if (process.env.NODE_ENV === 'production') {
  app.get('*', function (req, res) {
    res.sendfile(_path["default"].join(__dirname = 'client/build/index.html'));
  });
} else {
  //DEV mode
  app.get('*', function (req, res) {
    res.sendFile(_path["default"].join(__dirname + 'client/public/index.html'));
  });
}

server.listen(port, function () {
  console.log('ADMIN API SERVICE -- Listening on port: ' + port + '...'); //TODO: capture log files of crashes
  //fs.writeFile(__dirname + '/start.log', 'started', (err) => console.log('START LOGGED SAVED'));
});
//# sourceMappingURL=index.js.map