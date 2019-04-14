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
    this.create = this.create.bind(this);
    this.findOne = this.findOne.bind(this);
    this.findAll = this.findAll.bind(this);
  }

  async create(obj) {
    try {
      let newDocument = new this._model(obj);
      const savedDocument = await newDocument.save();
      return savedDocument;
    } catch (e) {
      throw Error(e);
    }
  }

  async findOne(findObj) {
    try {
      const document = await this._model.findOne(findObj);
      return document;
    } catch (e) {
      throw Error(e);
    }
  }

  async findAll(adminId) {
    try {
      let documents;
      if (adminId) {
        documents = await this._model.find({ adminId });
      } else {
        documents = await this._model.find();
      }
      return documents;
    } catch (e) {
      return Error(e);
    }
  }
}

export default AppController;
