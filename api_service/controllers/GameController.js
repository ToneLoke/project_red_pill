import AppController from './AppController';
class GameController extends AppController {

  // eslint-disable-next-line no-useless-constructor
  constructor(model) {
    super(model);
  }

  async all(req, res, next) {
    try {
      const adminId = req.decoded.__V;
      const games = this.findAll(adminId)
      res
        .status(200)
        .json(games)
    } catch (e) {
      next(e)
    }
  }
}
export default GameController;
