import ErrorTracker from '../../utils';
/**
 * The App controller class where other controller inherits or
 * overrides pre defined and existing properties
 */
class AppController {
		/**
	 * @param {Model} model The default model object
	 * for the controller. Will be required to create
	 * an instance of the controller
	 */
		constructor(model) {
				if (new.target === AppController) {
						throw new TypeError('Cannot construct Abstract instances directly');
				}
				this._model = model;
				this.create = this
						.create
						.bind(this);
		}
		/**
	 * @param {Object} req The request object
	 * @param {Object} res The response object
	 * @param {function} next The callback to the next program handler
	 * @return {Object} res The response object
	 */
		async create(req, res, next) {
				try {
						let obj = req.body;
						let object = new this._model(obj);
						const savedObject = await object.save();
						return res
								.status(200)
								.json(savedObject);
				} catch (e) {
						return next(e)
				}
		}

		async findOne(req) {
				try {
						let email = req.body.email;
						let admin = await this
								._model
								.findOne({email})
						if(!admin) throw new Error("no admin found");
						return admin;
				} catch (e) {
						return new ErrorTracker("Cannot find:", "A001", e)
				}
		}
}

export default AppController;;
