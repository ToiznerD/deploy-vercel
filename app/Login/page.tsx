"use client";

import React from 'react';

const LoginPage = () => {
  const submitForm = () => {
    alert("it's all good")
  };

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
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="p-2 mb-4 border border-gray-300 rounded"
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
