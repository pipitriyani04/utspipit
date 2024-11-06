import React from 'react';
// import './skill.css'; // Anda bisa menggunakan ini jika ingin menambahkan styling tambahan

const skills = ["HTML", "CSS", "JavaScript", "React", "Microsoft Excel", "Microsoft Word", "Visual FoxPro", "Photoshop"];

const Skills = () => {
  return (
    <section id="skillsSection" className="p-6 bg-gray-50 shadow-md rounded-lg">
      {/* Menambahkan class flex dan justify-center untuk memastikan judul berada di tengah */}
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-gray-500 to-indigo-600 shadow-md mb-8 tracking-wider text-center hover:scale-110 transition-all duration-500">
        My Skill
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center">
            <span className="text-gray-700 font-semibold">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
