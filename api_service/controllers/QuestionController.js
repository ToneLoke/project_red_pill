import AppController from './AppController';

class QuestionController extends AppController {

  // eslint-disable-next-line no-useless-constructor
  constructor(model) {
    super(model);
		this.all = this
			.all
			.bind(this);
		this.createQuestions = this
			.createQuestions
			.bind(this);
	}

  async all(req, res, next) {
    try {
     const questions = await this.findAll();
     res.status(200).json(questions);
    } catch (e) {
      req.error = { message: "cannot retrieve all questions", status: 500, errors: e }
      next()
    }
  }
  async createQuestions(req, res, next){
    const questions = [
      {
        question: "A SELLING OBJECTION is when a customer says 'No' to buying the vehicle.",
        type: 'switch',
        choices: ['true', 'false'],
        answers: [0],
        points: 1
      },
      {
        question: "An OBJECTION is:",
        type: 'multiple',
        choices: ['A reason or argument presented in opposition', 'A statement of opposition to an aspect of a judicial or other legal proceeding', 'A feeling or expression of disapproval', 'All of the Above', 'None of the above'],
        answers: [3],
        points: 2
      },
      {
        question: "A SELLING OBJECTION is:",
        type: 'multiple',
        choices: ['Desire not to proceed in the next step in the buying process', 'Unwillingness to purchase your product from you and your dealership at this time', 'Not having enough information to be certain the vehicle solves their current problems, wants and needs', 'All of the Above', 'None of the Above'],
        answers: [3],
        points:  2
      },
    ]
    //create promise array to create all questions
   const promiseQuestions = questions.map(this.create)
   try{
     const qs = await Promise.all(promiseQuestions)
     res.status(200).json(qs);
   }catch(e){
     req.error = { message: "cannot create questions", status: 500, errors: e}
     next();
   }
  }
}
export default QuestionController;
