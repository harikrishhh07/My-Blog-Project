import React from 'react'

export const Blog = (props) => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-300 hover:shadow-emerald-400 transition-shadow duration-300 mt-6 md:mt-10 mx-auto">
      <img
        className="h-48 md:h-56 lg:h-65 w-full object-cover"
        src={props.image}
        alt="Blog Cover"
      />
      <div className="p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-emerald-700 mb-2">{props.title}</h2>
        <p className="text-sm md:text-base text-gray-700 mb-4">
          {props.description}
        </p>
        <button
          className="px-3 md:px-4 py-2 bg-emerald-600 text-white rounded text-sm md:text-base hover:bg-emerald-700 transition-colors duration-200"
          onClick={props.onReadMore}
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  )
}

export default Blog
