"use client"; // Jika ini adalah file utama Anda

import React from 'react';
import ContactForm from './contactform'; // Sesuaikan dengan jalur yang benar

const App = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-xl">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
