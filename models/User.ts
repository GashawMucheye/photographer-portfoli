// models/User.ts
import mongoose, { Schema, models } from 'mongoose';

const UserSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    image: String,
    role: { type: String, default: 'user' }, // could be 'admin'
  },
  { timestamps: true }
);

export const User = models.User || mongoose.model('User', UserSchema);
