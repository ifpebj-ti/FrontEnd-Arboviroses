import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { NewPassword } from '@/service/UserService';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { mySchema } from '../schemas/schema';

export function useCardNewPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof mySchema>>({
    resolver: zodResolver(mySchema)
  });

  const { push } = useRouter();

  const submitForm: SubmitHandler<z.infer<typeof mySchema>> = async (data) => {
    const res = await NewPassword(data.password, data.oldPassword);

    if (res.status !== 200) {
      toast.error('Erro ao alterar senha');
    } else {
      toast.success('Senha alterada com sucesso');
      push('/');
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
