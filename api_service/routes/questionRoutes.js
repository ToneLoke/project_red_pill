import { Router } from 'express';
import QuestionModel   from '../models/Question';
import QuestionController from '../controllers/QuestionController';
import authenticate from './auth';
const router = Router();

const questionCtrl = new QuestionController(QuestionModel);

router.use(authenticate);
router.route('/')
		.get(questionCtrl.all)

export default router;
