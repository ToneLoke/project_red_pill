const router = require('express').Router();
const GameModel = require('../models/Game');
const GameController = require('../controllers/GameController');
const authenticate = require('./auth');

module.exports = function gameRoutes(io) {
  const gameCtrl = new GameController(GameModel, io);
  gameCtrl.setLiveGames();
  router.use(authenticate);
  router
    .route('/')
    .post(gameCtrl.makeGame)
    .get(gameCtrl.all);
  router.route('/:id').put(gameCtrl.update);
  return router;
}
