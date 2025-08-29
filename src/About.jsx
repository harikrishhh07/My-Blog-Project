import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">About This Blog</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-emerald-50 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-2">📘 The Future of AI in Education</h2>
          <p className="text-lg text-emerald-700">
            Artificial Intelligence is transforming the way students learn and teachers teach. From personalized learning paths and AI tutors to automated grading and immersive virtual classrooms, AI is bridging gaps in education, making learning more interactive, inclusive, and efficient.
          </p>
        </div>
        <div className="bg-emerald-50 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-2">🌱 Sustainable Engineering for a Better Tomorrow</h2>
          <p className="text-lg text-emerald-700">
            Sustainable engineering focuses on creating technologies and systems that meet today’s needs without compromising future generations. By harnessing renewable energy, eco-friendly materials, and green infrastructure, engineers play a vital role in building a cleaner, smarter, and more sustainable world.
          </p>
        </div>
        <div className="bg-emerald-50 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-2">💻 The Evolution of Computers</h2>
          <p className="text-lg text-emerald-700">
            From bulky machines that filled entire rooms to sleek laptops and powerful smartphones, computers have undergone a remarkable evolution. Each generation brought advancements in speed, design, and accessibility, shaping how we live, work, and connect in the digital era.
          </p>
        </div>
      </div>
      <button
        className="block mx-auto mt-12 px-6 py-3 bg-emerald-600 text-white rounded-full transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  )
}
export default About