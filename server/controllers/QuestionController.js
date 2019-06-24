const AppController = require("./AppController");
const csv = require("csv-parser");
const fs = require("fs");
const results = [];

class QuestionController extends AppController {
  // eslint-disable-next-line no-useless-constructor
  constructor(model) {
    super(model);
    this.all = this.all.bind(this);
    this.createQuestions = this.createQuestions.bind(this);
  }

  async all(req, res, next) {
    try {
      const questions = await this.findAll();
      res.status(200).json(questions);
    } catch (e) {
      req.error = {
        message: "cannot retrieve all questions",
        status: 500,
        errors: e
      };
      next();
    }
  }

  async createQuestions(req, res, next) {
    //create promise array to create all questions
    await fs
      .createReadStream("../../question-data.csv")
      .pipe(csv())
      .on("data", data => results.push(data))
      .on("end", () => {
        console.log("ADDING QUESTIONS:", results);
      });
    const promiseQuestions = questions.map(this.create);
    const questions = [];
    try {
      const qs = await Promise.all(promiseQuestions);
      res.status(200).json(qs);
    } catch (e) {
      req.error = {
        message: "cannot create questions",
        status: 500,
        errors: e
      };
      next();
    }
  }
}
module.exports = QuestionController;
