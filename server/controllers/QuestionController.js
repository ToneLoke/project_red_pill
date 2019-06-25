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
    const findFile = new Promise((resolve, reject) => {
      const questions = [];
      fs.createReadStream(__dirname + "/question-data.csv")
        .pipe(csv())
        .on("data", row => {
          console.log(row);
          row.choices = row.choices.split(',');
          row.answers = row.answers.split(',');
          questions.push(row);
        })
        .on("end", () => {
          console.log("CSV file successfully processed");
          resolve(questions);
        })
        .on("error", e => {
          console.log("ERROR READING CSV", e);
          reject(e);
        });
    });

    try {
      const questions = await findFile;
      const promiseQuestions = questions.map(this.create);
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
