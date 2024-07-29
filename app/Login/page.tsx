import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('./LoginForm'), { ssr: false });

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    // Redirect to the home page if logged in
    redirect('/');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
