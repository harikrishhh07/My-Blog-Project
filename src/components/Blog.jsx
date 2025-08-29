import React from 'react'

export const Blog = (props) => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-300 hover:shadow-emerald-400 transition-shadow duration-300 mt-10 ">
      <img
        className="h-65 w-full object-cover"
        src={props.image}
        alt="Blog Cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-emerald-700 mb-2">{props.title}</h2>
        <p className="text-gray-700 mb-4">
          {props.description}
        </p>
        <button
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors duration-200"
          onClick={props.onReadMore}
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  )
}

export default Blog
