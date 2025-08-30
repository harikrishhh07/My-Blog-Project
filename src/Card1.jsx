import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from './assets/image.jpg';

export const Card1 = () => {
  const navigate = useNavigate();

  const handleImageError = (e) => {
    console.log('Image failed to load, using fallback');
    e.target.style.display = 'none';
  };

  return (
    <div className="max-w-xl mx-auto mt-16 bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-300 p-8">
      <img
        className="w-full h-80 object-cover rounded"
        src={image}
        alt="AI in Education"
        onError={handleImageError}
      />
      <h2 className="text-3xl font-bold text-emerald-700 mt-6 mb-4">The Future of Education in AI</h2>
      <p className="text-gray-700 text-lg mb-4">
        Artificial Intelligence is transforming the education sector by enabling personalized learning experiences, automating administrative tasks, and providing intelligent tutoring systems. 
        With AI, students can learn at their own pace, access adaptive resources, and benefit from real-time feedback. 
        Educators are empowered to identify learning gaps and tailor instruction to individual needs, making education more inclusive and effective. 
        As AI continues to evolve, it promises to make learning more engaging, accessible, and impactful for everyone.
      </p>
      <h3 className="text-xl font-semibold text-emerald-600 mb-2">Key Benefits of AI in Education</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Personalized learning paths for each student</li>
        <li>Automated grading and feedback</li>
        <li>Intelligent tutoring and support</li>
        <li>Enhanced accessibility for students with disabilities</li>
        <li>Data-driven insights for educators</li>
      </ul>
      <h3 className="text-xl font-semibold text-emerald-600 mb-2">Challenges and Considerations</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Ensuring data privacy and security</li>
        <li>Addressing bias in AI algorithms</li>
        <li>Training educators to use AI tools effectively</li>
        <li>Maintaining human connection in learning</li>
      </ul>
      <p className="text-gray-700 text-lg mb-6">
        The integration of AI in education is still evolving, but its potential to revolutionize how we teach and learn is immense. By embracing AI responsibly, we can create a future where education is more adaptive, inclusive, and effective for all learners.
      </p>
      <button
        className="px-6 py-3 bg-emerald-600 text-white rounded-full transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-emerald-400"
        onClick={() => navigate('/blog')}
      >
        Back to Blogs
      </button>
    </div>
  )
}
export default Card1