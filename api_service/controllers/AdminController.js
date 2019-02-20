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

  makeToken(admin){
    return jwt.sign({
      __V: admin._id,
    }, config.secret)
  }

  async register(req, res, next) {
    try {
      const { email , password } = req.body;
      if(!email || !password) throw Error("missing credentials")
      const admin = await this.create({email, password})
      const token = this.makeToken(admin);
      res
       .status(200)
       .json({token, message: `thanks for registering ${admin.email}`})
    } catch (e) {
      req.error = {message: "cannot register user", status: 500, errors: e}
      next()
    }
  }

  async login(req, res, next) {
    try {
      const { email , password } = req.body;
      if(!email || !password) throw Error("missing credentials")
      const admin = await this.findOne({email})
      if (admin.authenticate(req.body.password)) {
        const token = this.makeToken(admin);
        res
          .status(200)
          .json({token, message: `Welcome home ${admin.email}`})
      } else {
        throw Error("invalid credentials")
      }
    } catch (e) {
      req.error = {message: "cannot login user", status: 500, errors: e}
      next()
    }
  }
}
export default AdminController;
