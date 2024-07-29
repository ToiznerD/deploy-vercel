"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  let login = false;
  const signup = () => {
    if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match');
      setShowModal(true);
      return;
    }

    setIsLoading(true);

    const data = { email, password };
    axios.post('/api/register', data)
      .then(() => {
        setAlertMessage('Signup successful!');
        login = true;
        setShowModal(true);
        
      })
      .catch(() => {
        setAlertMessage('Something went wrong');
        setShowModal(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (isLoading) {
    return <Loader size={30} className="animate-spin" />;
  }

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-sm flex flex-col items-center">
      <div className="text-2xl font-bold mb-4">Sign up</div>
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-2 mb-4 border border-gray-300 rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </form>
      <button
        type="button"
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        onClick={signup}
      >
        Sign up
      </button>
      <div className="mt-4">
        Already have an account? <a href="./Login" className="text-blue-500 hover:underline">Click here</a>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h5 className="text-xl font-bold">Alert</h5>
              <button onClick={closeModal} className="text-black text-2xl">&times;</button>
            </div>
            <div className="p-4">{alertMessage}</div>
            <div className="flex justify-end p-4 border-t">
              <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 mr-2">
                Close
              </button>
              <button onClick={() => router.push('/Login')} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
