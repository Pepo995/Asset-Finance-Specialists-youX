import { IUser } from '../interfaces/users';
import { User } from '../models/User';

export const getUsers = async () => {
  return await User.find();
};

export const getUserById = async (userId: string) => {
  return await User.findById(userId);
};

export const createUser = async (userData: IUser) => {
  const user = new User(userData);
  return await user.save();
};
