'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { createUser } from '@/service/UserService';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido')
});

type FormData = z.infer<typeof schema>;

type AdminModalFormProps = {
  title: string;
  onClose: () => void;
  initialData?: FormData;
};

export function AdminModalForm({
  title,
  onClose,
  initialData
}: AdminModalFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: ''
    }
  });

  useEffect(() => {
    if (initialData) {
      setValue('name', initialData.name);
      setValue('email', initialData.email);
    }
  }, [initialData, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await createUser(data.name, data.email);
      console.log('User created successfully:', response);
      toast.success('Usuario criado com sucesso');
      onClose();
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error('Ops! Aconteceu um erro');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md mx-4 md:w-1/3">
        <h2 className="text-xl mb-4">{title}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              {...register('name')}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register('email')}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
