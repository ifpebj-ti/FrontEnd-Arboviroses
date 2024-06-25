import { z } from 'zod';

export const mySchema = z.object({
  email: z.string().email('Email Inválido'),
  password: z.string(),
  repeatPassword: z.string().optional()
});
