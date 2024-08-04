import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { mySchema } from '../schemas/schema';

export function useInformativeForms() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof mySchema>>({
    resolver: zodResolver(mySchema)
  });

  async function submitForm(data: z.infer<typeof mySchema>) {
    console.log(data);
  }

  return { register, handleSubmit, submitForm, errors, isSubmitting };
}
