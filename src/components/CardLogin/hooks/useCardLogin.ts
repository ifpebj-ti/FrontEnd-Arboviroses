import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { mySchema } from '../schemas/schema';

export function useCardLogin(rota: string) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof mySchema>>({
    resolver: zodResolver(mySchema)
  });

  const { push } = useRouter();
  const watchPassword = watch('password');

  const submitForm: SubmitHandler<z.infer<typeof mySchema>> = async (data) => {
    if (rota === '/login') {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      });

      if (res?.error) {
        toast.error('Usuário ou senha inválidos');
        return;
      }

      toast.success('Login efetuado com sucesso');
      push('/');
    } else if (rota === '/newPassword') {
      console.log(data);
    } else if (rota === '/recoverPassword') {
      console.log(data);
    }
  };

  return {
    register,
    handleSubmit,
    submitForm,
    watchPassword,
    errors,
    isSubmitting
  };
}
