import { FiArrowLeft, FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi';

export default function Login() {
  return (
    <div className="bg-[url('/backgroundLogin.png')] bg-no-repeat bg-cover bg-center ">
      <div className="bg-[#182419CC] min-h-screen flex flex-col justify-between px-5 py-[60px]">
        <div className="flex flex-col gap-y-5">
          <FiArrowLeft className="text-secondary_100 text-xl/[120%]" />
          <h1 className="headline-title text-secondary_100">Login</h1>
        </div>
        <form className="flex flex-col w-full gap-y-5">
          <div className="flex items-center border-b gap-x-[10px] p-[10px]">
            <label>
              <FiMail className="text-primary_200 text-xl/[120%]" />
            </label>
            <input
              type="text"
              placeholder="Email"
              className="w-full bg-transparent outline-none text-gray_100 placeholder-gray_100 placeholder:caption-mobile"
            />
          </div>

          <div className="flex flex-col gap-y-[10px]">
            <div className="flex items-center border-b gap-x-[10px] p-[10px]">
              <label>
                <FiLock className="text-primary_200 text-xl/[120%]" />
              </label>
              <input
                type="password"
                placeholder="Senha"
                className="w-full bg-transparent outline-none text-gray_100 placeholder-gray_100 placeholder:caption-mobile"
              />
              {false && <FiEye className="text-gray_300 text-xl/[120%]" />}
              <FiEyeOff className="text-gray_300 text-xl/[120%]" />
            </div>
            <a href="" className="self-end text-primary_100 caption-mobile">
              Esqueci minha senha
            </a>
          </div>

          <button
            type="submit"
            className="section-title-mobile py-[10px] rounded-lg text-secondary_100 bg-primary_200"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
