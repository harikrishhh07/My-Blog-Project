import React, { Suspense, lazy } from "react";
import './index.css';
import Navbar from "./components/Navbar";
import { useNavigate, Routes, Route } from 'react-router-dom';
// Heavy component and route-level components are lazy-loaded to reduce initial bundle size
const Spline = lazy(() => import('@splinetool/react-spline'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./components/contact'));

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <h1 className="flex justify-center items-center font-bold text-2xl md:text-4xl lg:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-600 to-emerald-900 drop-shadow-lg p-2 md:p-4 
        border-2 md:border-4 border-emerald-700 rounded-xl md:rounded-2xl shadow-lg mx-4 md:mx-8
        transition-all duration-500 hover:border-emerald-400 hover:shadow-emerald-500 hover:scale-105">
        CREATE,COLLABORATE,INNOVATE
      </h1>
      <h2 className="flex justify-center items-center font-medium text-base md:text-xl lg:text-2xl font-serif text-emerald-300 mt-4 px-4 text-center tracking-wide transition-transform duration-300 hover:scale-105 hover:text-emerald-200">
        A modern whiteboard app for drawing, brainstorming, and real-time collaboration.
      </h2>

      <p className="max-w mx-auto text-center mt-3 text-9xl md:text-base lg:text-lg font-serif text-emerald-400 leading-relaxed px-4 md:px-8 border-b border-emerald-700/50 pb-4">
        Create shapes, draw freely, and work together seamlessly with your team.
      </p>
      {/* Launch button centered with hover animation */}
      <div className="flex justify-center mt-6 px-9">
        <button
          onClick={() => navigate("/launch", { state: { autoConnect: true } })}
          className="w-full max-w-3 sm:max-w-sm md:w-auto px-2 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white rounded-full text-sm sm:text-base md:text-xl font-semibold tracking-wide shadow-lg shadow-emerald-900/40 ring-2 ring-emerald-400/40 transition duration-200 sm:duration-300 motion-safe:hover:scale-105 sm:motion-safe:hover:scale-110 motion-safe:hover:-translate-y-0.5 hover:shadow-emerald-500/60 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50"
        >
          LAUNCH WHITE BOARD
        </button>
      </div>
      <div className="flex justify-center items-center h-screen relative bg-gradient-to-b from-black via-emerald-950/40 to-black">
        <Suspense fallback={<div className="text-white">Loading 3D scene...</div>}>
          <Spline
            className="scale-75 md:scale-90 lg:scale-110 opacity-90"
            scene="https://prod.spline.design/R1xRNZGEsoJdc2xn/scene.splinecode"
          />
        </Suspense>
      </div>
    </>
  );
}

function LaunchPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col py-6 md:py-10 px-4 md:px-8 lg:px-12 relative">
      <div className="self-center font-bold text-2xl md:text-4xl lg:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-600 to-emerald-900 drop-shadow-lg p-2 md:p-4 border-2 md:border-4 border-emerald-700 rounded-xl md:rounded-2xl shadow-lg transition-all duration-500 hover:border-emerald-400 hover:shadow-emerald-500 hover:scale-105 mb-8 md:mb-12 text-center">
        Collaborative Whiteboard
      </div>

      <button
        className="absolute top-[120%] left-[50%] -translate-x-1/2 -translate-y-1/2 px-4 md:px-6 py-2 md:py-3 bg-emerald-600 text-white rounded-full text-sm md:text-base transition-all duration-300 hover:bg-emerald-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  
  );
}

function App() {
  return (
    <Suspense fallback={<div className="p-4 text-emerald-700">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<LaunchPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default App;
