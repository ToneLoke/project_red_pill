import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
/**
 * Admin Schema
 */
const AdminSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
}, {
	timestamps: true,
});

AdminSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()
  this.password = bcrypt.hashSync(this.password, 8)
  next()
})
// authenticate a user password
AdminSchema.methods.authenticate = function (password) {
  var user = this
  return bcrypt.compareSync(password, user.password)
}

/**
 * @typedef AdminSchema
 */
export default mongoose.model('Admin', AdminSchema);
