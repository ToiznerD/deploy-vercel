"use client";

import React, { useState, useEffect } from 'react';
import {signIn, useSession} from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { data: session, status }  = useSession();

  const submitForm = () => {
    // Add your login logic here using email and password
    console.log('Email:', email);
    console.log('Password:', password);
    const data = {email, password};
    signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: '/',
    })
  };

  useEffect(() => {
    if (session) {
      // Redirect to the home page if logged in
      router.push('/');
    }
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div id="login_section" className="bg-white p-8 rounded shadow-md w-full max-w-sm flex flex-col justify-center items-center">
        <div id="login_text" className="text-2xl font-bold mb-4">
          Login to your account
        </div>
        <form id="aaa" className="flex flex-col">
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="p-2 mb-4 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-2 mb-4 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          type="submit"
          onClick={submitForm}
        >
          Submit
        </button>
        <div className="mt-4">
          Need an account? <a href="./Register" className="text-blue-500 hover:underline">Click here!</a>
        </div>
        <div className="mt-2">
          Want to talk? <a href="./Contact" className="text-blue-500 hover:underline">Contact us!</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
