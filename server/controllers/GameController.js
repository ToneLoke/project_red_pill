const AppController = require("./AppController");
const configSocket = require("../serverSocket");
const User = require("../models/User");
const debug = require("debug");
const logger = debug("GAME:CONTROLLER");
class GameController extends AppController {
  // eslint-disable-next-line no-useless-constructor
  constructor(model, io) {
    super(model);
    this._io = io;
    this.all = this.all.bind(this);
    this.makeGame = this.makeGame.bind(this);
    this.update = this.update.bind(this);
    this.setLiveGames = this.setLiveGames.bind(this);
    this.createStream = this.createStream.bind(this);
  }

  createStream(game) {
    let gameIO = this._io.of(`/${game._id}`);
    configSocket(gameIO, game._id);
  }

  async setLiveGames() {
    try {
      const liveGames = await this._model.find({
        status: { $in: ["live", "play", "pause"] }
      });
      logger("FOUND GAMES %O", liveGames);
      console.info(`======>  FOUND ${liveGames.length} GAMES`);
      liveGames.forEach(this.createStream);
    } catch (error) {
      logger.extend("ERROR")("%o", error);
      console.error(error);
    }
  }

  async all(req, res, next) {
    try {
      const userID = req.decoded._id;
      const games = await this._model
        .find()
        .where("status")
        .in(["play", "pause", "done", "live"])
        .where("adminId")
        .ne(userID)
        .populate("adminId");
      logger("FETCHED ALL PUBLIC GAMES: %o");
      console.log("SEACHING GAMES", games);
      res.status(200).json(games);
    } catch (e) {
      req.error = {
        message: "error finding games for admin",
        status: 500,
        errors: e
      };
      next();
    }
  }

  async makeGame(req, res, next) {
    try {
      const adminId = req.decoded._id;
      const newGame = { ...req.body, adminId };
      const game = await this.create(newGame);
      const admin = await User.findOne({ _id: adminId });
      if (admin.games) admin.games.push(game._id);
      else admin.games = [game._id];
      await admin.save();
      res.status(200).json(game);
    } catch (e) {
      req.error = {
        message: "error creating a game for admin",
        status: 500,
        errors: e
      };
      next();
    }
  }

  async update(req, res, next) {
    try {
      // const adminId = req.decoded._id;
      const gameId = req.params.id;
      const keys = ["__v", "_id", "createdAt", "updatedAt"];
      keys.forEach(key => {
        delete req.body[key];
      });

      if (!gameId) throw Error("need a valid game id");
      //TODO: make sure only creator can update and no updates can happen after status is live;
      const game = await this._model
        .findOne({ _id: gameId })
        .populate("questions");

      Object.keys(req.body).forEach(key => {
        // console.log("key:", key)
        game[key] = req.body[key];
      });

      //check if there's no questions selected and continue without saving
      if (game.status === "live" && game.questions.length == 0) {
        console.log("no questions return");
        req.error = {
          message: "add questions first",
          status: 500,
          errors: "no questions selected"
        };
        next();
      } else {
        await game.save();

        if (game.status === "live") {
          console.log("CREATING STREAM");
          this.createStream(game._id);
        }
        res.status(200).json(game);
      }
    } catch (e) {
      req.error = { message: "cannot update game", status: 500, errors: e };
      next();
    }
  }
}
module.exports = GameController;
