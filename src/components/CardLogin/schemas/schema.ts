import { z } from 'zod';

export const mySchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6)
  })
  .required();
