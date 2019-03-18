import {Schema, model} from 'mongoose';
import Question from './Question';

const PlayerSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  username: String,
  score: {
    type: Number,
    default: 0
  },
  answers: [
    {
      q_id: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
      },
      submission: [String]
    }
  ]
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
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question',
  }],
  totalPoints: {
    type: Number,
    default: 0,
    min: 0,
  },
  status: {
    type: String,
    enum: [
      'live', 'done', 'draft', 'pause'
    ],
    default: 'draft',
    index: true
  }
}, {timestamps: true});


GameSchema.pre('save', async function (next) {
  if(this.isModified('questions')){
     const questions = this.questions.map( _id => Question.findOne({_id}).select('points -_id'))
     const qs = await Promise.all(questions)
      this.totalPoints = qs.reduce( (prev, cur) => prev + cur.points, 0)
  }
  next()
})

GameSchema.methods.addPlayer = async function (player){
  this.players = this.players.find( p => p._id == player._id) ? this.players : [...this.players, player]
  await this.save()
}

export default model('Game', GameSchema);
