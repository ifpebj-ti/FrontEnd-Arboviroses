'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </SessionProvider>
  );
}
