import React from 'react'

function EditSensei({ form, closeModal }) {
  const [data, setData] = React.useState()
  const id = form.id

  async function handleSubmit(data) {
    await fetch(`api/sensei/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(form),
    })
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(data)
        }}
        className="mx-auto flex w-auto min-w-[25%] max-w-min flex-col items-stretch space-y-6"
      >
        <input
          type="text"
          placeholder="Topic e.g Next.js"
          value={form.topic}
          onChange={(e) => setData({ ...data, topic: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />
        <textarea
          placeholder="Sensei e.g Lee Robinson"
          value={form.sensei}
          onChange={(e) => setData({ ...data, sensei: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />
        <button type="submit" className="rounded bg-purple-500 p-1 text-white">
          Update
        </button>
      </form>
    </div>
  )
}

export default EditSensei
