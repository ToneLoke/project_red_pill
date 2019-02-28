// =====START GLOBAL VAR DECLARATION=====
import express from 'express'
import logger from 'morgan'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import gameRoutes from './api_service/routes/gameRoutes';
import adminRoutes from './api_service/routes/adminRoutes';
import questionRoutes from './api_service/routes/questionRoutes';

const mongodb_url = config.mongolabs || 'mongodb://localhost/project_red_pill';
const port = process.env.PORT || 8000
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// =======================================
// CONNECT TO LOCAL MONGO DB OR MONGOLABS
mongoose.connect(mongodb_url, function (err) {
  if (err) console.log(err)
  console.log('Connected to MongoDB')
})
// =======================================
// SETUP MIDDLEWARE FOR API
app.use(logger('dev'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cors())
// =======================================
// Initialize routes to use
app.use(adminRoutes)
//======================= pass the io server to game routes to create sockets =======================
app.use('/games', gameRoutes(io))
app.use('/questions',questionRoutes)
app.use(function (req, res) {
  //======================= ERROR IN ROUTE =======================
  console.log("=========================SERVER ERROR:")
  console.error(req.error)
  res.status(req.error.status).json(req.error)
})
// =======================================
// SET THE PORT TO RUN
app.listen(port, function () {
  console.log('ADMIN API SERVICE -- Listening on port: ' + port + '...')
})
