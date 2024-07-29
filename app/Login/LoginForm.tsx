"use client";

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = async () => {
    // Add your login logic here using email and password
    console.log('Email:', email);
    console.log('Password:', password);
    const data = { email, password };
    await signIn('credentials', {
      ...data,
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-sm flex flex-col justify-center items-center">
      <div className="text-2xl font-bold mb-4">
        Login to your account
      </div>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Email"
          className="p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
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
  );
};

export default LoginForm;
