import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['multiple', 'switch', 'order'],
  },
  choices: [String],
  answers: Array,
  points: Number

}, {
	timestamps: true,
});

export default mongoose.model('Question', QuestionSchema);
