const router = require('express').Router();
const UserModel = require('../models/User');
const UserController = require('../controllers/UserController');
const authenticate = require('./auth');
const userCtrl = new UserController(UserModel);

router.route('/register').post(userCtrl.register);
router.route('/login').post(userCtrl.login);
router.use(authenticate);
router.get('/me', userCtrl.me);
module.exports = router;
