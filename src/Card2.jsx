import React from 'react'
import { useNavigate } from 'react-router-dom'
import image2 from './assets/image2.jpg';
export const Card2 = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-xl mx-auto mt-8 md:mt-16 bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-300 p-4 md:p-6 lg:p-8 mx-4 md:mx-auto">
      <img
        className="w-full h-48 md:h-64 lg:h-80 object-cover rounded"
        src={image2}
        alt="Sustainable Engineering"
      />
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-700 mt-4 md:mt-6 mb-3 md:mb-4">Sustainable Engineering for a Better Tomorrow</h2>
      <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-3 md:mb-4">
        Sustainable engineering is the practice of designing and operating systems in a way that uses resources efficiently, minimizes environmental impact, and improves the quality of life for present and future generations. It integrates environmental, social, and economic considerations into engineering solutions, ensuring that development meets the needs of today without compromising the ability of future generations to meet their own needs.
      </p>
      <h3 className="text-lg md:text-xl font-semibold text-emerald-600 mb-2">Key Principles of Sustainable Engineering</h3>
      <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-3 md:mb-4">
        <li>Efficient use of energy and materials</li>
        <li>Reduction of waste and pollution</li>
        <li>Design for recyclability and reuse</li>
        <li>Integration of renewable energy sources</li>
        <li>Consideration of social and economic impacts</li>
      </ul>
      <h3 className="text-lg md:text-xl font-semibold text-emerald-600 mb-2">Innovations Driving Sustainability</h3>
      <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-3 md:mb-4">
        <li>Green building technologies and eco-friendly materials</li>
        <li>Smart grids and energy-efficient infrastructure</li>
        <li>Water conservation and management systems</li>
        <li>Waste-to-energy and circular economy models</li>
        <li>Clean transportation solutions</li>
      </ul>
      <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6">
        By embracing sustainable engineering, we can create resilient communities, protect natural resources, and foster innovation that benefits both people and the planet. The future of engineering lies in solutions that are not only technically sound but also environmentally responsible and socially equitable.
      </p>
      <button
        className="px-4 md:px-6 py-2 md:py-3 bg-emerald-600 text-white rounded-full text-sm md:text-base transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-emerald-400"
        onClick={() => navigate('/blog')}
      >
        Back to Blogs
      </button>
    </div>
  )
}
export default Card2
