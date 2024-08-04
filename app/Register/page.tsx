import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import dynamic from 'next/dynamic';
import RightBar from '../components/RightBar';

const SignUpForm = dynamic(() => import('./SignUpForm'), { ssr: false });

const SignUpPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    // Redirect to the home page if logged in
    redirect('/');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4 bg-white shadow-md rounded">
        <SignUpForm />
        <RightBar />
      </div>
    </div>
  );
};

export default SignUpPage;
