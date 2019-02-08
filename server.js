// =====START GLOBAL VAR DECLARATION=====
import express from 'express'
import logger from 'morgan'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import apiRoutes from './api_service/routes/adminRoutes';

const mongodb_url = config.mongolabs || 'mongodb://localhost/project_red_pill';
const port = process.env.PORT || 8000
const app = express();
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
app.use(apiRoutes)
// =======================================
// SET THE PORT TO RUN
app.listen(port, function () {
  console.log('ADMIN API SERVICE -- Listening on port: ' + port + '...')
})
