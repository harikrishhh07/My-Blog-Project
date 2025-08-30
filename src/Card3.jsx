import React from 'react'
import { useNavigate } from 'react-router-dom'
import image3 from './assets/image3.jpg';

export const Card3 = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-xl mx-auto mt-8 md:mt-16 bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-300 p-4 md:p-6 lg:p-8 mx-4 md:mx-auto">
      <img
        className="w-full h-48 md:h-64 lg:h-80 object-cover rounded"
        src={image3}
        alt="Evolution of Computers"
      />
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-emerald-700 mt-4 md:mt-6 mb-3 md:mb-4">The Evolution of Computers</h2>
      <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-3 md:mb-4">
        The journey of computers began in the mid-20th century with massive machines that filled entire rooms and performed basic calculations. Over the decades, computers have evolved dramatically, becoming smaller, faster, and more powerful. Today, they are an integral part of our daily lives, driving innovation in every field from science and medicine to entertainment and communication.
      </p>
      <h3 className="text-lg md:text-xl font-semibold text-emerald-600 mb-2">Major Milestones in Computer Evolution</h3>
      <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-3 md:mb-4">
        <li><strong>1940s:</strong> The first electronic computers, such as ENIAC and UNIVAC, were developed for scientific and military purposes.</li>
        <li><strong>1950s-60s:</strong> The invention of transistors and integrated circuits led to smaller and more reliable machines.</li>
        <li><strong>1970s:</strong> The personal computer revolution began with devices like the Apple I and IBM PC.</li>
        <li><strong>1980s-90s:</strong> Graphical user interfaces, networking, and the rise of the internet transformed how people interacted with computers.</li>
        <li><strong>2000s-present:</strong> Mobile computing, cloud technology, and artificial intelligence have made computers ubiquitous and smarter than ever.</li>
      </ul>
      <h3 className="text-lg md:text-xl font-semibold text-emerald-600 mb-2">Impact on Society</h3>
      <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mb-3 md:mb-4">
        <li>Revolutionized communication and information sharing</li>
        <li>Enabled scientific breakthroughs and data analysis</li>
        <li>Transformed industries through automation and digitalization</li>
        <li>Empowered creativity and global collaboration</li>
      </ul>
      <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6">
        The evolution of computers continues as new technologies emerge, shaping the future in ways we can only imagine. From quantum computing to AI-driven systems, the next chapter promises even greater advancements and possibilities.
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
export default Card3
