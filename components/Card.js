import { useRouter } from 'next/router'
import React, { useState } from 'react'
import EditSensei from './EditSensei'

function Card({ senseis }) {
  const [form, setForm] = useState(null)
  const [editModal, setEditModal] = useState(false)
  const router = useRouter()

  function refresh() {
    router.replace(router.asPath)
  }

  async function deleteSensei(id) {
    try {
      fetch(`http://localhost:3000/api/sensei/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }).then(() => {
        refresh()
      })
    } catch (error) {
      console.log(error)
    }
  }
  async function editSensei(sensei) {
    try {
      setForm(sensei)
      setEditModal((pV) => !pV)
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
                onClick={() => editSensei(sensei)}
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
      {editModal ? (
        <EditSensei form={form} closeModal={() => setEditModal(false)} />
      ) : null}
    </div>
  )
}

export default Card
