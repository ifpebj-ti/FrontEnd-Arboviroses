import { z } from 'zod';

export const mySchema = z
  .object({
    oldPassword: z.string().min(1, 'Campo obrigatório'),
    password: z.string().min(1, 'Campo obrigatório'),
    repeatPassword: z.string().min(1, 'Campo obrigatório')
  })
  .refine(
    (values) => {
      return values.password === values.repeatPassword;
    },
    {
      message: 'As senhas não coincidem',
      path: ['confirmPassword']
    }
  );
