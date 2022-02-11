import React from 'react'

function EditSensei({ form }) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(form)
        }}
        className="mx-auto flex w-auto min-w-[25%] max-w-min flex-col items-stretch space-y-6"
      >
        <input
          type="text"
          placeholder="Topic e.g Next.js"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />
        <textarea
          placeholder="Sensei e.g Lee Robinson"
          value={form.sensei}
          onChange={(e) => setForm({ ...form, sensei: e.target.value })}
          className="rounded border-2 border-gray-600 p-1"
        />
        <button type="submit" className="rounded bg-purple-500 p-1 text-white">
          Create
        </button>
      </form>
    </div>
  )
}

export default EditSensei
