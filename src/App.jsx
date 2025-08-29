import React from "react";
import './index.css';
import Navbar from "./components/Navbar";
import Spline from '@splinetool/react-spline';
import { Blog } from "./components/Blog";
import { useNavigate, Routes, Route } from 'react-router-dom';
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import About from "./About";
import Contact from "./components/contact";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <h1 className="flex justify-center items-center font-bold text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-600 to-emerald-900 drop-shadow-lg p-4 
        border-4 border-emerald-700 rounded-2xl shadow-lg 
        transition-all duration-500 hover:border-emerald-400 hover:shadow-emerald-500 hover:scale-105">
        WELCOME TO MY BLOG
      </h1>
      <h2 className="flex justify-center items-center font-bold text-2xl font-serif text-emerald-600 mt-4 transition-transform duration-300 hover:scale-110 hover:text-emerald-800">
        ✨ Discover Amazing Content ✨
      </h2>

      <p className="max-w-3xl mx-auto text-center mt-4 text-lg font-serif text-emerald-500 leading-relaxed 
        border-b-2 border-emerald-400 pb-4 
        transition-all duration-500 hover:border-emerald-600 hover:text-emerald-700">
        Discover inspiring blogs and innovative projects from passionate 
        <span className="font-semibold text-emerald-800"> second-year students</span>.
        <br />
        Explore the latest in <span className="underline decoration-emerald-400">web development</span>, 
        learn new technologies, and get inspired by creative solutions.
      </p>

      <div className="flex justify-center items-center h-screen bg-black relative">
        <Spline
          className="scale-110"
          scene="https://prod.spline.design/R1xRNZGEsoJdc2xn/scene.splinecode"
        />
        <button
          onClick={() => navigate("/blog")}
          className="absolute top-[5%] left-[50%] -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-emerald-600 text-white rounded-full transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400"
        >
          EXPLORE BLOGS
        </button>
      </div>
    </>
  );
}

function BlogPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col py-10 px-12 relative">
      <h1 className="self-center font-bold text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-600 to-emerald-900 drop-shadow-lg p-4
        border-4 border-emerald-700 rounded-2xl shadow-lg
        transition-all duration-500 hover:border-emerald-400 hover:shadow-emerald-500 hover:scale-105 mb-12">
        EXPLORE MY BLOGS
      </h1>
      <div className="flex flex-row gap-40">
        <Blog
          title="The Future of AI in Education"
          description="Artificial Intelligence is revolutionizing classrooms by making learning more personalized and inclusive. From smart tutors to accessibility tools, AI is shaping the future of education."
          image={image1}
          buttonText="Read More"
          onReadMore={() => navigate("/card1")}
        />

        <Blog
          title="Sustainable Engineering for a Better Tomorrow"
          description="Engineering innovations are driving sustainability. Learn how renewable energy, green design, and eco-friendly technologies are creating a better, greener world."
          image={image2}
          buttonText="Explore"
          onReadMore={() => navigate("/card2")}
        />

        <Blog
          title="The Evolution of Computers"
          description="From room-sized machines to sleek laptops and powerful smartphones, computers have transformed every aspect of human life. Explore how computing power continues to grow and shape the future."
          image={image3}
          buttonText="Start Learning"
          onReadMore={() => navigate("/card3")}
        />
      </div>
      <button
        className="absolute top-[120%] left-[50%] -translate-x-1/2 -translate-y-1/2 px-6 py-3 bg-emerald-600 text-white rounded-full transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/card1" element={<Card1 />} />
      <Route path="/card2" element={<Card2 />} />
      <Route path="/card3" element={<Card3 />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
