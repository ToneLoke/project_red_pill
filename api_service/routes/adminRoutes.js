import {Router} from 'express';
import AdminModel from '../models/Admin';
import AdminController from '../controllers/AdminController';
const router = Router();
const adminCtrl = new AdminController(AdminModel);

router.route('/admin')
	.post(adminCtrl.create);

export default router;
