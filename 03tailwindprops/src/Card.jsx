import React from 'react'

function Card({username = "HC", post = "not assummmeee" }) {
    console.log(username)
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <img className="w-full h-48 object-cover" src="" alt="Card Image" />

  <div className="p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{username || "himothy"}</h2>
    <p className="text-gray-600 mb-4">This is a brief description of the card content. It gives users a quick overview.</p>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
      {post}
    </button>
  </div>
</div>
  )
}

export default Card