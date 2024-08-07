import { useForm } from 'react-hook-form';

import { postInfoHome } from '@/service/InfoHomeService';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { mySchema } from '../schemas/schema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useInformativeForms(initialData?: any) {
  const myDataForm = new FormData();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof mySchema>>({
    resolver: zodResolver(mySchema),
    defaultValues: {
      topic: initialData?.topic ? initialData.topic : '',
      title: initialData?.title ? initialData.title : '',
      titleLink: initialData?.titleLink ? initialData.titleLink : '',
      link: initialData?.link ? initialData.link : '',
      typeInfo: initialData?.typeInfo ? initialData.typeInfo : ''
    }
  });

  async function submitForm(data: z.infer<typeof mySchema>) {
    myDataForm.append('topic', data.topic ? data.topic : '');
    myDataForm.append('title', data.title);
    myDataForm.append('titleLink', data.titleLink ? data.titleLink : '');
    myDataForm.append('link', data.link);
    myDataForm.append('typeInfo', data.typeInfo);
    myDataForm.append('file', data.image[0]);

    if (initialData?.id) {
      console.log('Id:', initialData.id);
      myDataForm.append('id', initialData.id);
    }

    const response = await postInfoHome(myDataForm);
    console.log(response);
  }

  return { register, handleSubmit, submitForm, errors, isSubmitting };
}
