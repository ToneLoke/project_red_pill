// =====START GLOBAL VAR DECLARATION=====
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('./config');
const apiService = require('./server/index');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { mongolabs, port} = config;

mongoose.connect(mongolabs, { useNewUrlParser: true }, function(err) {
  if (err) {
    console.log('ERROR CONNECTING TO MONGODB:', err);
  }else{
    console.log('Connected to MongoDB', mongolabs);
  }
});

// MIDDLEWARE
app.use(logger('dev'));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use(cors());
// REACT STATIC RENDER
app.use(express.static(path.join(__dirname, 'client/build')));
// API ROUTES
const base = '/api';
app.use(base, apiService.userRoutes);
app.use(`${base}/questions`, apiService.questionRoutes);
// GAME ROUTES WITH DYNAMIC SOCKETS
app.use(`${base}/games`, apiService.gameRoutes(io));

if(process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = '/client/build/index.html'));
  })
}else{
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
  });
}

app.use(function(req, res) {
  console.log('========================= SERVER ERROR =========================');
  console.error(req.error);
  if(req.error && req.error.status) {
    res.status(req.error.status).json(req.error)
  }else{
    res.status(500).json({message: "SERVER CRASHED UNKNOWN", success: false})
  }
});


server.listen(port, function() {
  console.log('======================== SERVER RUNNING ---> Listening on port: ' + port );
});
