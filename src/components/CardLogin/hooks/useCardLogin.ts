import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Login } from '@/service/UserService';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
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

  const { push } = useRouter();

  const submitForm: SubmitHandler<z.infer<typeof mySchema>> = async (data) => {
    const res = await Login(data.email, data.password);

    console.log('Respota', res);

    if (res.status === 404) {
      toast.error('Usuário não encontrado');
      return;
    }

    if (res.status === 200) {
      Cookies.set('token', res.data.token, { expires: 1, secure: true });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const myUser: any = jwtDecode(res.data.token);
      toast.success('Login efetuado com sucesso');
      toast.info('Seu primeiro acesso é recomendado alterar a senha');
      if (myUser.primaryaccess === 'False') {
        push('/newPassword');
      } else {
        push('/');
      }
    }
  };

  return {
    register,
    handleSubmit,
    submitForm,
    errors,
    isSubmitting
  };
}
