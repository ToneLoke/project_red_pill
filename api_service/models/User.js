import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    games: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
      }
    ],
    completed: [String],
    firstName: String,
    lastName: String,
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});
// authenticate a user password
UserSchema.methods.authenticate = function(password) {
  var user = this;
  return bcrypt.compareSync(password, user.password);
};

export default mongoose.model('User', UserSchema);
