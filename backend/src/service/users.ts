import { CreateUserParams, IUser } from '../interfaces/users';
import { User } from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id: number, email: string) =>
  jwt.sign({ id, email }, process.env.ACCESS_TOKEN_SECRET || 'TOP_SECRET');

export const register = async (registerParams: CreateUserParams) => {
  const hashedPassword = await bcrypt.hash(registerParams.password, 10);
  registerParams.password = hashedPassword;

  const user = await User.findOne({
    where: { email: registerParams.email },
  });

  if (user) {
    throw new Error('The user already exists');
  }

  return await User.create(registerParams);
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('The user does not exists');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Invalid credentials');
  }

  return { token: createToken(user.id, email) };
};

export const getUserById = async (userId: string) => {
  await User.findById(userId);
};

export const createUser = async (userData: IUser) => {
  const user = new User(userData);
  return await user.save();
};
