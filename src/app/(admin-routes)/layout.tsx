import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { nextAuthOptions } from '@/service/authOptions';

export default async function PrivateLayout({
  children
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect('/');
  }

  return (
    <div className="lg:pl-64">
      {/* <aside>
        <MenuSideBar
          nomeUsuario={session.user.name!}
          cargoUsuario={session.user.role!}
          email={session.user.email!}
        />
      </aside> */}
      <main className="flex flex-col items-center min-h-screen relative p-4 pt-20 gap-y-10 lg:pt-1 pb-32 sm:pb-28">
        {children}
      </main>
    </div>
  );
}
