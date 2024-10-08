'use client';

import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#e1bee7] via-[#f3e5f5] to-[#f8bbd0]">
      <div className="text-center">
        <div className="flex items-center justify-center relative w-20 h-20 mx-auto">
          <AiOutlineLoading3Quarters className="w-20 h-20 text-lavender animate-spin" />
        </div>
        <p className="mt-4 text-xl text-gray-700 font-semibold animate-pulse">
          Sending your message...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
