import { Router } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../config';
import GameModel from '../models/Game';
import GameController from '../controllers/GameController';

const { secret } = config;


export default function (io) {
	const router = Router();

	const gameCtrl = new GameController(GameModel, io);
	//MIDDLEWARE TOKEN CHECK
	router.use(function (req, res, next) {
		// LOOK FOR TOKEN IN 3 LOCATIONS BODY OBJECT PARAMETER KEY OR HEADER OBJECT
		var token = req.body.token || req.param('token') || req.headers['x-access-token']
		// IF A TOKEN EXISTS SEND THE DECODED INFORMATION
		if (token) {
			console.log("TOKEN", token)
			console.log(secret)
			jwt.verify(token, secret, function (err, decodedToken) {
				if (err) {
					console.log(err)
					res.status(401).json({ message: 'invalid credentials', success: false })
				} else {
					req.decoded = decodedToken
					next()
				}
			})
		} else {
			res.status(401).json({ message: 'please log in', success: false })
		}
	})
	router.route('/')
		.post(gameCtrl.makeGame)
		.get(gameCtrl.all)
	router.route('/:id')
		.put(gameCtrl.update)

	return router;
};
