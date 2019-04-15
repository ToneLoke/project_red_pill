const jwt = require('jsonwebtoken');
const config = require('../../config');

const secret = config.secret;

const token_auth = (req, res, next) => {
  // LOOK FOR TOKEN IN 3 LOCATIONS BODY OBJECT PARAMETER KEY OR HEADER OBJECT
  const authorization = req.headers.authorization;
  let token = authorization ? authorization.split(' ')[1] : false;
  // IF A TOKEN EXISTS SEND THE DECODED INFORMATION
  if (req.error) return next();
  if (token) {
    jwt.verify(token, secret, (err, tokenData) => {
      if (err) return res.status(401).json({ message: 'invalid credentials', success: false });
      else {
        req.decoded = tokenData;
        return next();
      }
    });
  } else {
    return res.status(401).json({ message: 'please login', success: false });
  }
};
module.exports = token_auth;
