import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const[form,setForm]=useState({topic:'',sensei:''})

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Sensei | Curate your favourite guides</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">

        <form onSubmit={e => {
        e.preventDefault()

      }} className='w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch'>
        <input type="text"
          placeholder="Topic"
          value={form.topic}
          onChange={e => setForm({...form, topic: e.target.value})}
          className="border-2 rounded border-gray-600 p-1"
        />
        <textarea
          placeholder="Sensei"
          value={form.sensei}
          onChange={e => setForm({...form, sensei: e.target.value})}
          className="border-2 rounded border-gray-600 p-1"
        />
        <button type="submit" className="bg-purple-500 text-white rounded p-1">Create</button>
      </form>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          copyright 2022

        </a>
      </footer>
    </div>
  )
}
