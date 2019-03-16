import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'hard', 'medium']
  },
  maxTime: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    enum: ['multiple', 'switch', 'order'],
  },
  choices: Array,
  answers: Array,
  points: Number
}, {
	timestamps: true,
});

export default mongoose.model('Question', QuestionSchema);
