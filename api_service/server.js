// =====START GLOBAL VAR DECLARATION=====
import "@babel/polyfill";
import express from 'express'
import logger from 'morgan'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import config from '../config';
import gameRoutes from './routes/gameRoutes';
import adminRoutes from './routes/userRoutes';
import questionRoutes from './routes/questionRoutes';

const mongodb_url = config.mongolabs || 'mongodb://localhost/project_red_pill';
const port = process.env.PORT || 8000;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// =======================================
// CONNECT TO LOCAL MONGO DB OR MONGOLABS
mongoose.connect(mongodb_url, function(err) {
  if (err) console.log(err);
  console.log('Connected to MongoDB');
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
// =======================================
// Initialize routes to use
app.use('/', adminRoutes);
//======================= pass the io server to game routes to create sockets =======================
app.use('/games', gameRoutes(io));
app.use('/questions', questionRoutes);
app.use(function(req, res) {
  //======================= ERROR IN ROUTE =======================
  console.log('=========================SERVER ERROR:');
  console.error(req.error);
  res.status(req.error.status).json(req.error);
});
//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join((__dirname = 'client/build/index.html')));
  });
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});
server.listen(port, function() {
  console.log('ADMIN API SERVICE -- Listening on port: ' + port + '...');
  fs.writeFile(__dirname + '/start.log', 'started', (err) => console.log('START LOGGED SAVED'));
});
