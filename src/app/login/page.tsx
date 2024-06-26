import { CardLogin } from '@/components';

export default function Login() {
  return (
    <div className="min-h-screen bg-[url('/backgroundLoginMobile.png')] bg-no-repeat bg-cover bg-center lg:bg-[url('/backgroundLogin.png')] lg:flex">
      <CardLogin />
    </div>
  );
}
