"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import RightBar from '../components/RightBar';
import axios from 'axios';
import { Loader } from 'lucide-react';

const ContactPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [label, setLabel] = useState('');
  const [loading, setLoading] = useState(false);
  
  const submitForm = () => {
    setLoading(true);
    if (name === '' || email === '' || subject === '' || message === '') {
      setLabel('Please fill in all fields.');
      return;
    }
    axios.post('/api/send-email', { name, email, subject, message })
      .then(() => {
        setLabel('Email sent successfully!');
        clearFields();
        setLoading(false);
      })
      .catch((error) => {
        alert('Error sending email. Please try again later.');
        console.error(error);
        setLoading(false);
      });
  };

  const clearFields = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  const goBack = () => {
    router.push('/Login')
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row gap-4 bg-white shadow-md rounded">
        <div id="login_section" className="bg-white p-8 rounded w-full max-w-sm flex flex-col justify-center items-center">
          <div id="login_text" className="text-2xl font-bold mb-4">
            Contact us
          </div>
          <form id="aaa" className="flex flex-col">
            <input
              type="text"
              id="name"
              placeholder="Full name"
              className="p-2 mb-4 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="p-2 mb-4 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              id="contect"
              placeholder="Contact us concerning"
              className="p-2 mb-4 border border-gray-300 rounded"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              id="message"
              placeholder="Your Message"
              className="p-2 mb-4 border border-gray-300 rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </form>
          {loading ? (<Loader size={24} className="animate-spin" />) : ( 
            <>
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
            </>
            )}
            
          {label && <p>{label}</p>}
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default ContactPage;
