import React from 'react'
import { useNavigate } from 'react-router-dom'

const Launch = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-emerald-950/40 to-black px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-900 drop-shadow-2xl text-center">
        Whiteboard Launcher
      </h1>
      <button
        onClick={() => navigate('/')}
        className="mt-8 px-6 md:px-8 py-3 md:py-4 bg-emerald-600 text-white rounded-full text-base md:text-lg font-semibold tracking-wide shadow-lg shadow-emerald-900/40 ring-2 ring-emerald-400/50 transition-all duration-300 hover:bg-emerald-700 hover:scale-110 hover:shadow-emerald-500/60"
      >
        Back to Home
      </button>
    </div>
  )
}

export default Launch
