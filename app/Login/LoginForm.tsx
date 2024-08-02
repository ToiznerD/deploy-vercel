"use client";

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = async () => {
    try {
      // Log the form data for debugging
      console.log('Email:', email);
      console.log('Password:', password);
  
      // Sign in with credentials
      const result = await signIn('credentials', {
        redirect: true, // Set to true to automatically handle redirection
        email,
        password,
        callbackUrl: '/', // Redirect to home page or desired URL after login
      });
  
      // Optionally handle the result if needed
      if (result?.error) {
        console.error('Login failed:', result?.error);
        // Display error message to the user or handle it as needed
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      // Optionally display error message to the user or handle it
    }
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
        Need an account? <a href="/Register" className="text-blue-500 hover:underline">Click here!</a>
      </div>
      <div className="mt-2">
        Want to talk? <a href="/Contact" className="text-blue-500 hover:underline">Contact us!</a>
      </div>
    </div>
  );
};

export default LoginForm;
