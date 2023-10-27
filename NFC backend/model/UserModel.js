import { Schema, model } from 'mongoose';
import { hash } from 'bcrypt';

const userSchema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const hashedPassword = hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

export default model('User', userSchema);
