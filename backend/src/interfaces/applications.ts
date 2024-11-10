import { Document, Schema } from 'mongoose';

export interface IApplication extends Document {
  user: Schema.Types.ObjectId;
  income: number;
  expenses: number;
  assets: number;
  liabilities: number;
}

export interface createApplicationParams {
  userId: number;
}
