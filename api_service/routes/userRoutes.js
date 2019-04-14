import { Router } from 'express';
import UserModel from '../models/User';
import UserController from '../controllers/UserController';
import authenticate from './auth';

const router = Router();

const userCtrl = new UserController(UserModel);

router.route('/register').post(userCtrl.register);
router.route('/login').post(userCtrl.login);
router.use(authenticate);
router.get('/me', userCtrl.me);
export default router;
