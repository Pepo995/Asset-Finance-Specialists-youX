import { model, Schema } from 'mongoose';

const ApplicationSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    income: Number,
    expenses: Number,
    assets: Number,
    liabilities: Number,
  },
  { timestamps: true },
);

const Application = model('Application', ApplicationSchema);

export default Application;
