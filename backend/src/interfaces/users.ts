import { Document, Schema } from 'mongoose';
import { z } from 'zod';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

export const getUserParams = z.object({
  id: z.string(),
});
export type GetUserParams = z.infer<typeof getUserParams>;

export const createUserParams = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
export type CreateUserParams = z.infer<typeof createUserParams>;

export const loginUserParams = z.object({
  email: z.string(),
  password: z.string(),
});
export type LoginUserParams = z.infer<typeof loginUserParams>;
