"use client";

import React, { useState } from 'react';

const SignUpPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const signup = () => {
    // Add your signup logic here
    setAlertMessage('Signup successful!'); // Example message
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div id="login_section" className="bg-white p-8 rounded shadow-md w-full max-w-sm flex flex-col items-center">
        <div id="login_text" className="text-2xl font-bold mb-4">
          Sign up
        </div>
        <form id="aaa" className="flex flex-col">
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            id="Password_signup"
            placeholder="Password"
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="p-2 mb-4 border border-gray-300 rounded"
          />
        </form>
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={signup}
        >
          Sign up
        </button>
        <div className="mt-4">
          Already have an account? <a href="./Login" className="text-blue-500 hover:underline">Click here</a>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h5 className="text-xl font-bold">Alert</h5>
              <button onClick={closeModal} className="text-black text-2xl">&times;</button>
            </div>
            <div id="alert" className="p-4">
              {alertMessage}
            </div>
            <div className="flex justify-end p-4 border-t">
              <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 mr-2">
                Close
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
