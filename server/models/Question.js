const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      enum: ['easy', 'hard', 'medium'],
      default: 'easy'
    },
    maxTime: {
      type: Number,
      required: true,
      default: 50
    },
    type: {
      type: String,
      enum: ['multiple', 'switch', 'order']
    },
    choices: Array,
    answers: Array,
    points: Number
  },
  {
    timestamps: true
  }
);
const Question = mongoose.model('Question',QuestionSchema);
module.exports = Question;
