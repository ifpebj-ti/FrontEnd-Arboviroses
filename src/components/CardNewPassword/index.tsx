'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowLeft, FiEye, FiEyeOff, FiLock } from 'react-icons/fi';

import { useCardNewPassword } from './hooks/useCardNewPassword';

export function CardNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const { register, handleSubmit, submitForm, errors, isSubmitting } =
    useCardNewPassword();

  return (
    <div className="min-h-screen flex flex-col justify-between px-5 py-[60px] lg:bg-secondary_100 lg:w-[538px] lg:min-h-0 lg:p-[60px] lg:rounded-[50px] lg:absolute lg:right-[100px] lg:self-center">
      <div className="flex flex-col gap-y-5 lg:gap-y-10">
        <Link href="/login">
          <FiArrowLeft className="text-secondary_100 text-xl/[120%] cursor-pointer lg:text-secondary_200" />
        </Link>
        <h1 className="headline-title text-secondary_100 lg:text-primary_300">
          Nova Senha
        </h1>
      </div>
      <form
        className="flex flex-col w-full gap-y-5 lg:mt-10"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex items-center border-b gap-x-[10px] p-[10px] lg:border-gray_500">
          <label htmlFor="oldPassword">
            <FiLock className="text-primary_200 text-xl/[120%] lg:text-primary_300" />
          </label>
          <input
            id="oldPassword"
            type="text"
            placeholder="Senha Atual"
            className="w-full bg-transparent outline-none text-gray_100 placeholder-gray_100 placeholder:caption-mobile lg:placeholder-gray_600 lg:text-secondary_200"
            {...register('oldPassword')}
          />
        </div>
        {errors.oldPassword && (
          <p className="-mt-5 text-red-600">{errors.oldPassword.message}</p>
        )}

        <div className="flex items-center border-b gap-x-[10px] p-[10px] lg:border-gray_500">
          <label htmlFor="password">
            <FiLock className="text-primary_200 text-xl/[120%] lg:text-primary_300" />
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder={'Nova senha'}
            className="w-full bg-transparent outline-none text-secondary_100 placeholder-gray_100 placeholder:caption-mobile lg:placeholder-gray_600 lg:text-secondary_200"
            {...register('password')}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer"
          >
            {showPassword && (
              <FiEye className="text-gray_300 text-xl/[120%] lg:text-gray_700" />
            )}
            {!showPassword && (
              <FiEyeOff className="text-gray_300 text-xl/[120%] lg:text-gray_700" />
            )}
          </div>
        </div>
        {errors.password && (
          <p className="-mt-5 text-red-600">{errors.password.message}</p>
        )}

        <div className="flex items-center border-b gap-x-[10px] p-[10px] lg:border-gray_500">
          <label htmlFor="repeatPassword">
            <FiLock className="text-primary_200 text-xl/[120%] lg:text-primary_300" />
          </label>
          <input
            id="repeatPassword"
            type={showRepeatPassword ? 'text' : 'password'}
            placeholder={'Confirmar nova senha'}
            className="w-full bg-transparent outline-none text-secondary_100 placeholder-gray_100 placeholder:caption-mobile lg:placeholder-gray_600 lg:text-secondary_200"
            {...register('repeatPassword')}
          />
          <div
            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            className="cursor-pointer"
          >
            {showRepeatPassword && (
              <FiEye className="text-gray_300 text-xl/[120%] lg:text-gray_700" />
            )}
            {!showRepeatPassword && (
              <FiEyeOff className="text-gray_300 text-xl/[120%] lg:text-gray_700" />
            )}
          </div>
        </div>
        {errors.repeatPassword && (
          <p className="-mt-5 text-red-600">{errors.repeatPassword.message}</p>
        )}

        <button
          type="submit"
          className="section-title-mobile py-[10px] rounded-lg text-secondary_100 bg-primary_200 hover:bg-primary_300 lg:hover:bg-primary_500 lg:bg-primary_300"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <span className="w-12 h-12 border-[5px] border-b-transparent rounded-[50%] inline-block box-border animate-spin" />
          )}
          {!isSubmitting && 'Entrar'}
        </button>
      </form>
    </div>
  );
}
