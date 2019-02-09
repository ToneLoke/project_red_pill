import AppController from './AppController';
import jwt from 'jsonwebtoken';
import { secret } from '../../config';
/**
 * The App controller class where other controller inherits or
 * overrides pre defined and existing properties
 */
class AdminController extends AppController {
  /**
	 * @param {Model} model The default model object
	 * for the controller. Will be required to create
	 * an instance of the controller
	 */
  // eslint-disable-next-line no-useless-constructor
  constructor(model) {
    super(model);
  }
  /**
	 * @param {Object} req The request object
	 * @param {Object} res The response object
	 * @param {function} next The callback to the next program handler
	 * @return {Object} res The response object
	 */
  async signIn(req, res, next) {
    try {
      const admin = await this.findOne(req)
      if (admin.authenticate(req.body.password)) {
        const {email, games, questions} = admin;
        const token = jwt.sign({
          email,
          games,
          questions
        }, secret, {expiresInMinutes: 52000})
        res
          .status(200)
          .json({token, message: `Welcome home ${email}`})
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (e) {
      next(e)
    }
  }
}
export default AdminController;
