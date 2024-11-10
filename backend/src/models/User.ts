import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/users';

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = model<IUser>('User', UserSchema);