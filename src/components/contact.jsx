import React from 'react'
import { useNavigate } from 'react-router-dom'
import myImage from '../assets/myimage.jpg' 

export const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm md:max-w-lg mx-auto mt-8 md:mt-16 bg-white rounded-3xl shadow-lg border border-emerald-300 p-4 md:p-6 lg:p-8 px-4">
      <img
        src={myImage}
        alt="My Profile"
        className="w-24 h-28 md:w-32 md:h-36 lg:w-35 lg:h-40 object-cover rounded-full mx-auto mb-4 md:mb-6 border-2 md:border-4 border-emerald-400"
      />
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-700 mb-4 md:mb-6 text-center">Contact Me</h1>
      <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6 text-center">
        I would love to hear from you! Whether you have questions, feedback, or want to collaborate, feel free to reach out.
      </p>
      <div className="space-y-3 md:space-y-4">
        <div>
          <span className="font-semibold text-emerald-800 text-sm md:text-base">Email:</span>
          <span className="ml-2 text-gray-700 text-sm md:text-base">ee3962@srmist.edu.in</span>
        </div>
        <div>
          <span className="font-semibold text-emerald-800 text-sm md:text-base">Name:</span>
          <span className="ml-2 text-gray-700 text-sm md:text-base">E.Harikrishna</span>
        </div>
        <div>
          <span className="font-semibold text-emerald-800 text-sm md:text-base">Phone:</span>
          <span className="ml-2 text-gray-700 text-sm md:text-base">+91 9442091322</span>
        </div>
        <div>
          <span className="font-semibold text-emerald-800 text-sm md:text-base">Address:</span>
          <span className="ml-2 text-gray-700 text-sm md:text-base">SRM KTR, Chennai, Tamil Nadu, India</span>
        </div>
      </div>
      <button
        className="block mx-auto mt-8 md:mt-12 px-4 md:px-6 py-2 md:py-3 bg-emerald-600 text-white rounded-full text-sm md:text-base transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  )
}
export default Contact