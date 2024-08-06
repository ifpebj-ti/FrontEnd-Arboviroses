import { z } from 'zod';

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
];
export const mySchema = z.object({
  topic: z.string(),
  title: z.string().min(1, 'Campo obrigatório'),
  titleLink: z.string(),
  link: z.string().url('Digite um link válido').min(1, 'Campo obrigatório'),
  typeInfo: z.enum(['New', 'Video', 'Article'], {
    errorMap: () => {
      return { message: 'Tipo do informativo obrigatório' };
    }
  }),
  image: z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, 'Tamanho máximo da imagem é de 5MB.')
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      'Formatos de arquivos suportados: .jpg, .jpeg, .png e .webp'
    )
});
