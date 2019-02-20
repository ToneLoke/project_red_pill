import { Router } from 'express';
import AdminModel from '../models/Admin';
import AdminController from '../controllers/AdminController';

const router = Router();

const adminCtrl = new AdminController(AdminModel);

router.route('/register')
	.post(adminCtrl.register);
router.route('/login')
  .post(adminCtrl.login)

export default router;
