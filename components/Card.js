import React from 'react'

function Card() {
  return (
    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
      <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
        <h3 className="text-2xl font-bold">Topic</h3>
        <p className="mt-4 text-xl">Sensei</p>
      </div>
    </div>
  )
}

export default Card
