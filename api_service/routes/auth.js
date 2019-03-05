import jwt from 'jsonwebtoken';
import config from '../../config';

const secret = config.secret;

const token_auth = (req, res, next) => {
  // LOOK FOR TOKEN IN 3 LOCATIONS BODY OBJECT PARAMETER KEY OR HEADER OBJECT
  //TODO: research better method for this...
  let token = req.body.token || req.param('token') || req.headers['x-access-token']
  // IF A TOKEN EXISTS SEND THE DECODED INFORMATION
  console.log("ERROR ON TOKEN", token)
  if (token) {
    jwt.verify(
      token,
      secret,
      (err, tokenData) => {
        if(err) res.status(401).json({ message: 'invalid credentials', success: false })
        else {
        req.decoded = tokenData
        next()
        }
      }
    )
  } else {
    res.status(401).json({ message: 'please login', success: false })
  }
}
 export default token_auth;
