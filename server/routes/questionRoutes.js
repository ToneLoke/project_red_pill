const router = require("express").Router();
const QuestionModel = require("../models/Question");
const QuestionController = require("../controllers/QuestionController");
const authenticate = require("./auth");

const questionCtrl = new QuestionController(QuestionModel);

router.route("/gen").get(questionCtrl.createQuestions);
router.use(authenticate);
router.route("/").get(questionCtrl.all);

module.exports = router;
