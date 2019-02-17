import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../../config'
import AdminModel from '../models/Admin';
import AdminController from '../controllers/AdminController';
import GameModel from '../models/Game';
import GameController from '../controllers/GameController';

const router = Router();

const adminCtrl = new AdminController(AdminModel);
const gameCtrl = new GameController(GameModel);

router.route('/register')
	.post(adminCtrl.register);
router.route('/login')
	.post(adminCtrl.login)
	// .get(adminCtrl.refresh)

//MIDDLEWARE TOKEN CHECK
router.use(function (req, res, next) {
	// LOOK FOR TOKEN IN 3 LOCATIONS BODY OBJECT PARAMETER KEY OR HEADER OBJECT
	var token = req.body.token || req.param('token') || req.headers['x-access-token']
	// IF A TOKEN EXISTS SEND THE DECODED INFORMATION
	if (token) {
		jwt.verify(token, secret, function (err, decodedToken) {
			if (err) res.status(401).json({ message: 'invalid credentials', success: false })
			req.decoded = decodedToken
			next()
		})
	} else {
		res.status(401).json({ message: 'please log in', success: false })
	}
})

router.route('/games')
		.post(gameCtrl.create)
		.get(gameCtrl.all)
router.route('/games/:id')
		.get(gameCtrl.findOne)
		// .put(gameCtrl.update)

router.use(function (req, res) {
	res.status(req.error.status).json(req.error)
})
export default router;
