import {default as ErrorTracker} from '../../src/utils/AppError';
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
				this.findOne = this
						.findOne
						.bind(this);
				this.findAll = this
						.findAll
						.bind(this);
		}

		async create(req, res) {
				try {
						let obj = req.body;
						let object = new this._model(obj);
						const savedObject = await object.save();
						return savedObject;
				} catch (e) {
						res.status(400).send({message: "Cannot Register", code:400, error: e})
				}
		}

		async findOne(req) {
				try {
						const email = req.body.email;
						console.log("findOne", email)
						const admin = await this
								._model
								.findOne({email})
						return admin;
				} catch (e) {
						throw new Error("No User found")
				}
		}

		async findAll(adminId) {
			try {
				const games = await this._model.find({adminId})
				return games;
			} catch (e) {
				return new ErrorTracker("Error in findAll:", "A002", e)
			}

		}
}

export default AppController;;
