import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import dynamic from 'next/dynamic';
import RightBar from '../components/RightBar';

const LoginForm = dynamic(() => import('./LoginForm'), { ssr: false });

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4 bg-white shadow-md rounded">
        <LoginForm />
        <RightBar />
      </div>
    </div>
  );
};

export default LoginPage;
