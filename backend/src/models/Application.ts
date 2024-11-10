import { model, Schema } from 'mongoose';
import { IApplication } from '../interfaces/applications';

const ApplicationSchema = new Schema<IApplication>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    income: Number,
    expenses: Number,
    assets: Number,
    liabilities: Number,
  },
  { timestamps: true },
);

const Application = model<IApplication>('Application', ApplicationSchema);

export default Application;
