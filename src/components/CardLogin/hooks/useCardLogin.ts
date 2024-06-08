import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { mySchema } from '../schemas/schema';

export function useCardLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof mySchema>>({
    resolver: zodResolver(mySchema)
  });

  const submitForm: SubmitHandler<z.infer<typeof mySchema>> = async (data) => {
    setTimeout(() => console.log(data), 2000);
  };

  return {
    register,
    handleSubmit,
    submitForm,
    errors,
    isSubmitting
  };
}
