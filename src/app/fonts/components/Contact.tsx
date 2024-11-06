"use client"; // Menandai ini sebagai Client Component

import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [comments, setComments] = useState<{ name: string; comment: string; rating: number }[]>([]);

  // Memuat komentar yang disimpan di localStorage saat komponen pertama kali di-render
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Menangani submit form dan menyimpan data ke localStorage
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Membuat komentar baru
    const newComment = { name, comment, rating };

    // Menyimpan komentar ke dalam array comments
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    // Menyimpan komentar terbaru ke localStorage
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    // Reset form setelah submit
    setName('');
    setComment('');
    setRating(0);
    setSubmitted(true);
  };

  // Menghitung average rating dari semua komentar
  const averageRating = comments.length
    ? (comments.reduce((acc, { rating }) => acc + rating, 0) / comments.length).toFixed(1)
    : 0;

  return (
    <section className="p-4 bg-blue-100 shadow-md rounded-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-gray-500 to-indigo-600 shadow-md mb-8 tracking-wider text-center hover:scale-110 transition-all duration-500">
       Contact Form
      </h1>
      {submitted && <p className="text-gray-600 text-center">Terima kasih atas komentarnya!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-blue-700 text-xl mb-1" htmlFor="name">Nama</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full p-3 border border-blue-300 rounded-md text-sm"
            required 
          />
        </div>
        <div>
          <label className="block text-blue-700 text-xl mb-1" htmlFor="comment">Komentar</label>
          <textarea 
            id="comment" 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            className="w-full p-3 border border-blue-300 rounded-md text-sm" 
            style={{ height: '120px' }} 
            required 
          />
        </div>
        <div>
          <label className="block text-blue-700 text-sm mb-1">Rating</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span 
                key={star} 
                className={`cursor-pointer text-${rating >= star ? 'yellow-600' : 'gray-300'} text-2xl hover:text-yellow-500 transition-all duration-200`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200 text-sm"
        >
          Kirim
        </button>
      </form>
      <div className="mt-4 text-center">
        <h5 className="text-sm font-semibold">Average Rating: {averageRating} / 5</h5>
      </div>

      {/* Menampilkan komentar */}
      <div className="mt-6">
        <h3 className="text-md font-semibold text-center text-gray-800">Komentar yang Dikirim</h3>
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={index} className="p-4 border border-blue-300 rounded-md bg-blue-50">
              <p className="text-sm font-semibold text-blue-800">{comment.name}</p>
              <p className="text-sm">{comment.comment}</p>
              <p className="text-sm text-yellow-600">Rating: {comment.rating} / 5</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="w-full bg-white p-6 rounded-lg shadow-xl">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
