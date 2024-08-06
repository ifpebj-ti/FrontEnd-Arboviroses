import { useForm } from 'react-hook-form';

import { postInfoHome } from '@/service/InfoHomeService';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { mySchema } from '../schemas/schema';

export function useInformativeForms() {
  const myDataForm = new FormData();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof mySchema>>({
    resolver: zodResolver(mySchema)
  });

  async function submitForm(data: z.infer<typeof mySchema>) {
    myDataForm.append('topic', data.topic ? data.topic : '');
    myDataForm.append('title', data.title);
    myDataForm.append('titleLink', data.titleLink ? data.titleLink : '');
    myDataForm.append('link', data.link);
    myDataForm.append('typeInfo', data.typeInfo);
    myDataForm.append('file', data.image[0]);

    const response = await postInfoHome(myDataForm);
    console.log(response);
  }

  return { register, handleSubmit, submitForm, errors, isSubmitting };
}
