'use client'; // Menandakan ini adalah komponen client

import React, { useState } from 'react';

const myInfos = {
  TTL: "Majalengka, 04 Mei 2004",
  Gender: "Perempuan",
  TinggiBadan: "145 cm",
  BeratBadan: "60 kg",
  StatusPernikahan: "Belum Menikah",
  WhatsApp: "+62 815-7282-3404",
  Email: "p2tftry0405@gmail.com",
};

const PersonalInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 to-blue-300 bg-opacity-50 py-12">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-96 max-w-full transform transition-all duration-500 ease-in-out hover:scale-105 bg-opacity-70">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          <span className="text-pink-600">Personal</span> Information
        </h2>
        
        {/* Tombol toggle untuk menampilkan atau menyembunyikan informasi */}
        <button 
          onClick={() => setShowInfo(!showInfo)} 
          className="w-full bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition duration-300 text-lg font-semibold mb-6"
        >
          {showInfo ? "Sembunyikan Info" : "Tampilkan Info"}
        </button>

        {/* Menampilkan informasi pribadi */}
        {showInfo && (
          <ul className="space-y-3 text-lg text-gray-700">
            {Object.entries(myInfos).map(([key, value], index) => (
              <li key={index} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg shadow-sm">
                <span className="font-semibold text-gray-700">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <div className="mt-6 text-center">
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
