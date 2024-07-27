"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const ContactPage = () => {
  const router = useRouter();
  const submitForm = () => {
    // Add your form submission logic here
  };

  const goBack = () => {
    router.push('/Login')
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div id="login_section" className="bg-white p-8 rounded shadow-md w-full max-w-sm flex flex-col justify-center items-center">
        <div id="login_text" className="text-2xl font-bold mb-4">
          Contact us
        </div>
        <form id="aaa" className="flex flex-col">
          <input
            type="text"
            id="name"
            placeholder="Full name"
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            id="contect"
            placeholder="Contact us concerning"
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <textarea
            id="message"
            placeholder="Your Message"
            className="p-2 mb-4 border border-gray-300 rounded"
          ></textarea>
        </form>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          type="submit"
          onClick={submitForm}
        >
          Submit
        </button>
        <button
          className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-300 mt-4"
          type="button"
          onClick={goBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
