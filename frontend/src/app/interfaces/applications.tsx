import { z } from 'zod';

export interface Application {
  _id: string;
  income: number;
  expenses: number;
  assets: number;
  liabilities: number;
}

export const applicationSchema = z.object({
  income: z.preprocess((val) => parseFloat(val as string), z.number()),
  expenses: z.preprocess((val) => parseFloat(val as string), z.number()),
  assets: z.preprocess((val) => parseFloat(val as string), z.number()),
  liabilities: z.preprocess((val) => parseFloat(val as string), z.number()),
});
export type ApplicationInterface = z.infer<typeof applicationSchema>;
