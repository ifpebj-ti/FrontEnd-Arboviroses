import { z } from 'zod';

export const mySchema = z.object({
  topic: z.string().min(1, 'Campo obrigatório'),
  title: z.string().min(1, 'Campo obrigatório'),
  titleLink: z.string().min(1, 'Campo obrigatório'),
  link: z.string().min(1, 'Campo obrigatório')
});
