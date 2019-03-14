import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
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
    enum: ['live', 'done', 'draft'],
    default: 'draft'
  }
}, {
    timestamps: true,
  });
//add pre save method to calc totalPoints

export default mongoose.model('Game', GameSchema);
