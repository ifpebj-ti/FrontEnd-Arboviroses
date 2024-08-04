import { ReactNode } from 'react';

import { Footer, NavBar } from '@/components';

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar isAdmin={true} />
      {children}
      <Footer />
    </>
  );
}
