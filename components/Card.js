import React from 'react'

function Card({ senseis }) {
  async function deleteSensei(id) {
    try {
      fetch(`http://localhost:3000/api/sensei/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
      <ul>
        {senseis.map((sensei) => (
          <li key={sensei.id}>
            <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-purple-600 focus:text-purple-600">
              <h3 className="text-2xl font-bold">{sensei.topic}</h3>
              <p className="mt-4 text-xl">{sensei.sensei}</p>
              <button
                onClick={() =>
                  setForm({
                    title: sensei.title,
                    content: sensei.content,
                    id: sensei.id,
                  })
                }
                className="mr-3 rounded bg-blue-500 px-3 text-white"
              >
                Update
              </button>
              <button
                onClick={() => deleteSensei(sensei.id)}
                className="rounded bg-red-500 px-3 text-white"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card
