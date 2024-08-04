/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInformativeForms } from './hooks/useInformativeForms';

type ModalFormProps = {
  onClose: () => void;
  initialData?: any;
};

export function ModalForm({ onClose }: ModalFormProps) {
  const { register, errors, handleSubmit, isSubmitting, submitForm } =
    useInformativeForms();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md mx-4 md:w-1/3">
        <h2 className="text-xl mb-4">Novo Informativo</h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-4">
            <label htmlFor="topic" className="block text-gray-700">
              Tópico
            </label>
            <input
              id="topic"
              type="text"
              className="w-full px-3 py-2 border rounded"
              {...register('topic')}
            />
            {errors.topic && (
              <p className="-mt-5 text-red-600">{errors.topic.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Título
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border rounded"
              {...register('title')}
            />
            {errors.title && (
              <p className="-mt-5 text-red-600">{errors.title.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="titleLink" className="block text-gray-700">
              Título do link
            </label>
            <input
              id="titleLink"
              type="text"
              className="w-full px-3 py-2 border rounded"
              {...register('titleLink')}
            />
            {errors.titleLink && (
              <p className="-mt-5 text-red-600">{errors.titleLink.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="link" className="block text-gray-700">
              Link do informativo
            </label>
            <input
              id="link"
              type="url"
              className="w-full px-3 py-2 border rounded"
              {...register('link')}
            />
          </div>
          {errors.link && (
            <p className="-mt-5 text-red-600">{errors.link.message}</p>
          )}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-danger_300 text-white px-4 py-2 rounded mr-2 hover:bg-danger_400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-primary_300 text-white px-4 py-2 rounded hover:bg-primary_400 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span className="w-5 h-5 border-[5px] border-b-transparent rounded-[50%] inline-block box-border animate-spin" />
              )}
              {!isSubmitting && 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
