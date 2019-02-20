import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
	adminId: {
		type: String,
    required: true,
    index: true
	},
	players: {
		type: Array,
  },
  title: {
    type: String,
    required: true
  },
  questions: {
    type: Array,
  },
  totalPoints: {
    type: Number
  },
  status: {
    type: String,
    enum: ['live', 'closed', 'draft'],
    default: 'draft'
  }

}, {
	timestamps: true,
});

export default mongoose.model('Game', GameSchema);
