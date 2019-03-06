import AppController from './AppController';
import jwt from 'jsonwebtoken';
import config from '../../config';


class AdminController extends AppController {

  // eslint-disable-next-line no-useless-constructor
  constructor(model) {
    super(model);

    this.login = this
        .login
        .bind(this);
    this.register = this
        .register
        .bind(this);
  }

  makeToken(user){
    return jwt.sign({
      __V: user._id,
      __U: user.username
    }, config.secret)
  }

  async register(req, res, next) {
    try {
      const { username , password } = req.body;
      if(!username || !password) throw Error("missing credentials")
      const user = await this.create({username, password})
      const token = this.makeToken(user);
      return res
       .status(200)
       .json({token, message: `thanks for registering ${user.username}`})
    } catch (e) {
      req.error = {message: "cannot register user", status: 500, errors: e}
      return next()
    }
  }

  async login(req, res, next) {
    try {
      const { username , password } = req.body;
      if(!username || !password) throw Error("missing credentials")
      const user = await this.findOne({username})
      if (user.authenticate(req.body.password)) {
        const token = this.makeToken(user);
        res
          .status(200)
          .json({token, message: `Welcome home ${user.username}`})
      } else {
        throw Error("invalid credentials")
      }
    } catch (e) {
      req.error = {message: "cannot login user", status: 500, errors: e}
      next()
    }
  }

  async me(req, res, next){
    return res.status(200).json(req.decoded)
  }
}
export default AdminController;
