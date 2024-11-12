import { z } from 'zod';

export const registerValidationSchema = z.object({
  name: z.string(),
  email: z.string().email('The email is not valid'),
  password: z
    .string()
    .min(8, 'The password must have at least 8 characters')
    .max(20, 'The password should not have more than 20 characters'),
});
export type RegisterValidationInterface = z.infer<typeof registerValidationSchema>;

export const loginValidationSchema = z.object({
  email: z.string().email('The email is not valid'),
  password: z
    .string()
    .min(8, 'The password must have at least 8 characters')
    .max(20, 'The password should not have more than 20 characters'),
});
export type LoginValidationInterface = z.infer<typeof loginValidationSchema>;
