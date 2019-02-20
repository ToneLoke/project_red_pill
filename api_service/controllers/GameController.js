import AppController from './AppController';
class GameController extends AppController {

  // eslint-disable-next-line no-useless-constructor
  constructor(model) {
    super(model);
    this.all = this
    .all
    .bind(this);
    this.makeGame = this
      .makeGame
      .bind(this);
    this.update = this
      .update
      .bind(this);
  }

  async all(req, res, next) {
    try {
      const adminId = req.decoded.__V;
      const games = await this.findAll(adminId)
      res.status(200).json(games)
    } catch (e) {
      req.error = {message: "error finding games for admin", status: 500, errors: e}
      next()
    }
  }
  async makeGame(req, res, next) {
    try {
      const adminId = req.decoded.__V;
      const newGame = { ...req.body, adminId }
      const game = await this.create(newGame);
      res.status(200).json(game)
    } catch (e) {
      req.error = {message: "error creating a game for admin", status: 500, errors: e}
      next()
    }
  }
  async update(req, res, next) {
    try{
      // const adminId = req.decoded.__V;
      const gameId = req.params.id;
      if(!gameId) throw Error("need a valid game id");
      //TODO: make sure only creator can update and no updates can happen after status is live;
      const game = await this._model.findOneAndUpdate({_id: gameId},{...req.body});
      res.status(200).json(game);
    }catch(e){
      req.error = {message: "cannot update game", status: 500, errors: e};
      next();
    }
  }
}
export default GameController;
