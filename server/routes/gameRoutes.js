import { Router } from 'express';
import GameModel from '../models/Game';
import GameController from '../controllers/GameController';
import authenticate from './auth';

export default function(io) {
  const router = Router();
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
