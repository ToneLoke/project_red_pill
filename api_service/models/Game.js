import {Schema, model} from 'mongoose';

const PlayerSchema = new Schema({
  _id:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  score: {
    type: Number,
    default: 0
  },
  answers: [{
    q_id: {type: Schema.Types.ObjectId, ref: 'Question'},
    submission: [String]
  }]
})

const GameSchema = new Schema({
  adminId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  players: [PlayerSchema],
  title: {
    type: String,
    required: true
  },
  qNum: {
    type: Number,
    default: 0
  },
  questions: {
    type: Array,
  },
  totalPoints: {
    type: Number
  },
  status: {
    type: String,
    enum: ['live', 'done', 'draft', 'start', 'stop'],
    default: 'draft'
  }
}, {
    timestamps: true,
  });
//add pre save method to calc totalPoints

export default model('Game', GameSchema);
