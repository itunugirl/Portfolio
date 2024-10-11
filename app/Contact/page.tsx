'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db } from '../../firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('');
    setLoading(true);

    if (!isValidEmail(formData.email)) {
      setSubmissionStatus('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, 'messages'), formData);
      setSubmissionStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmissionStatus('Error sending message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10" data-aos="fade-up">
          <h1 className="text-lg font-bold font-Libre-Baskerville text-gray-200 sm:text-lg mb-2">
            Get in Touch!
          </h1>
          <div className="mb-4">
            <hr className="border-b-2 border-gray-300 mx-auto w-1/2" />
          </div>
          <p className="text-lg text-gray-400 mb-8">
            I&apos;m always open to discussing new projects and opportunities. Leave a request below!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="hidden md:flex flex-col justify-center items-start mb-4 md:mb-0" data-aos="fade-right">
            <h1 className="text-lg font-bold text-gray-200 mb-4">
              <span className='font-bold text-2xl'>You Need</span> <br /> a beautiful design for your website?
            </h1>
            <p className="text-lg text-gray-400 mb-4">Leave a request and let&apos;s bring your vision to life!</p>
          </div>

          <div className="flex justify-center items-center my-4 md:block hidden" data-aos="fade-up">
            <span className="text-xl text-gray-800">→</span>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2" data-aos="fade-left">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Me</h2>
            {submissionStatus && (
              <div className={`mb-4 ${submissionStatus.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {submissionStatus}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adekunle Itunuoluwa"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  required
                  aria-label="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="itunuoluwafelicia@gmail.com"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  required
                  aria-label="Your email address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  required
                  aria-label="Your message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`flex items-center bg-[gold] text-black hover:bg-[#2c2b2b] hover:text-white px-4 py-2 rounded transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <AiOutlineSend className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
