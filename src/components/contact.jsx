import React from 'react'
import { useNavigate } from 'react-router-dom'
import myImage from '../assets/myimage.jpg' 

export const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-lg mx-auto mt-16 bg-white rounded-3xl shadow-lg border border-emerald-300 p-8">
      <img
        src={myImage}
        alt="My Profile"
        className="w-35 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-emerald-400"
      />
      <h1 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Contact Me</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        I would love to hear from you! Whether you have questions, feedback, or want to collaborate, feel free to reach out.
      </p>
      <div className="space-y-4">
        <div>
          <span className="font-semibold text-emerald-800">Email:</span>
          <span className="ml-2 text-gray-700">ee3962@srmist.edu.in</span>
        </div>
        <div>
          <span className="font-semibold text-emerald-800">Name:</span>
          <span className="ml-2 text-gray-700">E.Harikrishna</span>
        </div>
        <div>
          <span className="font-semibold text-emerald-800">Phone:</span>
          <span className="ml-2 text-gray-700">+91 9442091322</span>
        </div>
        <div>
          <span className="font-semibold text-emerald-800">Address:</span>
          <span className="ml-2 text-gray-700">SRM KTR, Chennai, Tamil Nadu, India</span>
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
export default Contact