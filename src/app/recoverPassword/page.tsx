import { CardRecoverPassword } from '@/components';

export default function recoverPassword() {
  return (
    <div className="min-h-screen bg-[url('/backgroundLoginMobile.png')] bg-no-repeat bg-cover bg-center lg:bg-[url('/backgroundLogin.png')] lg:flex">
      <CardRecoverPassword />
    </div>
  );
}
