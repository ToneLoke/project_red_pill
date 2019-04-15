// =====START GLOBAL VAR DECLARATION=====
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const config = require('./config');
const apiService = require('./server');
const { gameRoutes, userRoutes, questionRoutes } = apiService;
const mongodb_url = config.mongolabs || 'mongodb://localhost/project_red_pill';
const port = process.env.PORT || 8000;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// =======================================
// CONNECT TO LOCAL MONGO DB OR MONGOLABS
mongoose.connect(mongodb_url, function(err) {
  if (err) console.log('ERROR CONNECTING TO MONGODB:', err);
  console.log('Connected to MongoDB', mongodb_url);
});
// =======================================
// SETUP MIDDLEWARE FOR API
app.use(logger('dev'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());
// Initialize routes to use
const base = '/api';
app.use(base, userRoutes);
//======================= pass the io server to game routes to create sockets =======================
app.use(`${base}/games`, gameRoutes(io));
app.use(`${base}/questions`, questionRoutes);


//production mode check
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));
  app.get('/*', (req, res) => {
    res.sendfile(path.join(__dirname = '/client/build/index.html'));
  })
}else{
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
  });
}

app.use(function(req, res) {
  //======================= ERROR IN ROUTE =======================
  console.log('========================= SERVER ERROR =========================');
  console.error(req.error);
  if(req.error && req.error.status) {
    res.status(req.error.status).json(req.error)
  }else{
    res.status(500).json({message: "SERVER CRASHED", success: false})
  }
});


server.listen(port, function() {
  console.log('======================== SERVER RUNNING ---> Listening on port: ' + port );
});
