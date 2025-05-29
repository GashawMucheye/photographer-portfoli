// lib/auth.ts
import { User } from '@/models/User';
import { connectToDatabase } from './db';
import bcrypt from 'bcryptjs';

export async function verifyUserCredentials(email: string, password: string) {
  await connectToDatabase();
  const user = await User.findOne({ email });
  if (!user || !user.password) return null;

  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
}
