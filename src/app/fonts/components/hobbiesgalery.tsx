import React from 'react';

// Data Hobi
const hobbies = [
  { name: 'Hiking', image: '/images/hiking.jpg' },
  { name: 'Kuliner', image: '/images/kuliner.jpeg' },
  { name: 'Reading', image: '/images/reading.jpg' },
  { name: 'Photography', image: '/images/potoooo.jpg' },
];

const MyGallery = () => {
  return (
    <section className="p-6 bg-gradient-to-r from-indigo-500 to-pink-500 shadow-xl rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center text-white">My Hobbies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-105"
          >
            <img
              src={hobby.image}
              alt={hobby.name}
              className="w-32 h-32 object-cover rounded-lg shadow-lg transform group-hover:scale-110 transition-all duration-500"
            />
            <span className="mt-3 text-white font-medium text-lg text-center">{hobby.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-2xl">
        <MyGallery />
      </div>
    </div>
  );
};

export default App;
