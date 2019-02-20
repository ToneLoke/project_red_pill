import { Router } from 'express';
import QuestionModel   from '../models/Question';
import QuestionController from '../controllers/QuestionController';

const router = Router();

const questionCtrl = new QuestionController(QuestionModel);

router.route('/')
		// .post(questionCtrl.createQuestions)
		.get(questionCtrl.all)

export default router;
