import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-6 md:py-12 px-4 md:px-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-emerald-700 mb-6 md:mb-8">About This Project</h1>
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
        <div className="bg-emerald-50 rounded-lg p-4 md:p-6 shadow">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-emerald-800 mb-2">Collaborative Whiteboard</h2>
          <p className="text-sm md:text-base lg:text-lg text-emerald-700">
          The Collaborative Whiteboard is a real-time web application that allows multiple users to draw, write, and brainstorm together on a shared digital canvas. Built using Java (for backend) and modern frontend technologies, this project demonstrates the power of real-time collaboration, socket programming, and interactive UI design.
          It enables teams, students, and educators to visualize ideas, plan projects, and share knowledge instantly, bridging the gap between physical and digital brainstorming.
          <br /><br />  Problem Statement:
Traditional brainstorming and collaboration often require physical whiteboards or separate tools, which can be inefficient or inaccessible for remote teams. This project solves this problem by providing a digital platform where teams can collaborate seamlessly in real-time from any location.
<br />Objectives:
<br />To implement a real-time collaborative drawing environment.
<br />To learn and apply Java socket programming for networked applications.
<br />To design an intuitive and user-friendly GUI for efficient collaboration.
<br />To integrate multi-user presence tracking and live updates.
Applications:
<br />Education: Teachers and students can collaborate on lessons and projects.
<br />Remote Teams: Brainstorming, flowcharts, and project planning.
<br />Creative Work: Designers and artists can co-create sketches and mockups.
<br />Workshops & Hackathons: Real-time interactive sessions for ideas sharing.
          </p>
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
export default About