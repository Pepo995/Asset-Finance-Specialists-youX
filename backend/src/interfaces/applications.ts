import { Document, Schema } from 'mongoose';
import { z } from 'zod';

export interface IApplication extends Document {
  user: Schema.Types.ObjectId;
  income: number;
  expenses: number;
  assets: number;
  liabilities: number;
}

export const createApplicationParams = z.object({
  income: z.number(),
  expenses: z.number(),
  assets: z.number(),
  liabilities: z.number(),
});
export type CreateApplicationParams = z.infer<typeof createApplicationParams>;

export const updateApplicationParams = z.object({
  income: z.number().optional(),
  expenses: z.number().optional(),
  assets: z.number().optional(),
  liabilities: z.number().optional(),
});
export type UpdateApplicationParams = z.infer<typeof updateApplicationParams>;
