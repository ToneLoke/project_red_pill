const dotenv = require('dotenv');
const cfg = {};

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  dotenv.config({ path: '.env' });
} else {
  dotenv.config({ path: '.env.test', silent: true });
}

// HTTP Port to run our web application
cfg.port = process.env.PORT || 8000;
// API BASE URL (change if testing on mobile to your comps ipv4)
cfg.apiURL = process.env.API_URL || 'http://localhost:8000';

// A random string that will help generate secure one-time passwords and
// HTTP sessions
cfg.secret = process.env.APP_SECRET || 'keyboard cat';

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
//
// A good practice is to store these string values as system environment
// variables, and load them from there as we are doing below. Alternately,
// you could hard code these values here as strings.
// cfg.accountSid = process.env.TWILIO_ACCOUNT_SID
// cfg.authToken = process.env.TWILIO_AUTH_TOKEN
// cfg.sendingNumber = process.env.TWILIO_NUMBER
cfg.mongolabs =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/project_red_pill'
// var requiredConfig = [cfg.accountSid, cfg.authToken, cfg.sendingNumber]
// var isConfigured = requiredConfig.every(function (configValue) {
//   return configValue || false
// })

// if (!isConfigured) {
//   var errorMessage =
//   'TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_NUMBER must be set.'

//   throw new Error(errorMessage)
// }

// Export configuration object

module.exports = cfg;
