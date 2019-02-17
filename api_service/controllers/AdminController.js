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
    console.log("REGISTER", req.body)
    try {
      const admin = await this.create(req, res)
      console.log(admin)
      const token = this.makeToken(admin);
      console.log("token",token)
      res
       .status(200)
       .json({token, message: `thanks for registering ${admin.email}`})
    } catch (e) {
      console.error(e);
      res.status(401).send({message: "Cannot Register", status: 401, error: e});
    }
  }

  async login(req, res, next) {
    try {
      const { email , password } = req.body;
      if(!email || !password) throw new Error("missing credentials")
      const admin = await this.findOne(req)
      if (admin.authenticate(req.body.password)) {
        const token = this.makeToken(admin);
        res
          .status(200)
          .json({token, message: `Welcome home ${admin.email}`})
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (e) {
      req.error = {message: "cannot login user", status: 500, errors: e}
      res.status(500).json({message: e, status: 500 })
    }
  }
}
export default AdminController;
