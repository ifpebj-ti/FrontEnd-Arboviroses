import { z } from 'zod';

export const mySchema = z.object({
  email: z.string().min(1, 'Campo obrigatório').email('Email Inválido'),
  password: z.string().min(1, 'Campo obrigatório'),
  accessCode: z.string().min(1, 'Campo obrigatório')
});
