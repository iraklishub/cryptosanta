'use client'

import { useState } from 'react'

const LetterForm = ({ t, className }) => {
  const [isLoading, setisLoading] = useState(false)
  const [data, setdata] = useState({
    name: '',
    email: '',
    message: ''
  })

  const sendLetter = async (e) => {
    e.preventDefault()
    // setisLoading(true)
    console.log(data)
    // try {
    //   const response = await fetch('/api/send', {
    //     method: 'POST',
    //     body: JSON.stringify(data)
    //   })

    //   if (response.status === 200) {
    //     setdata({
    //       name: '',
    //       email: '',
    //       message: ''
    //     })
    //     // toast here
    //   }
    // } catch (error) {
    //   console.log(error)
    //   console.error(error)
    // } finally {
    //   setisLoading(false)
    // }
  }

  return (
    <form
      onSubmit={sendLetter}
      className={`flex flex-col bg-slate-900/60 text-white p-4 ${className}`}
    >
      <label className="flex items-center">
        <span className="w-1/6 capitalize">{t.your_name}</span>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setdata({ ...data, name: e.target.value })}
          required
          autoComplete="off"
          className="bg-transparent outline-0 border-b-2 p-1 ml-2"
        />
      </label>
      <label className="flex items-center mt-4">
        <span className="w-1/6 capitalize">{t.parent_email}</span>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setdata({ ...data, email: e.target.value })}
          required
          autoComplete="off"
          className="bg-transparent outline-0 border-b-2 p-1 ml-2"
        />
      </label>
      <label className="flex flex-col mt-10">
        <span className="text-center text-2xl capitalize">{t.letter}</span>
        <textarea
          name="message"
          value={data.message}
          onChange={(e) => setdata({ ...data, message: e.target.value })}
          placeholder={t.dear_santa}
          required
          className="h-60 bg-orange-100/80 text-stone-950 placeholder:text-stone-700 placeholder:capitalize font-semibold mt-4 outline-0 rounded-md px-4 py-2"
        />
      </label>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z"
              clipRule="evenodd"
            />
          </svg>

          <span className="ml-2 capitalize">{isLoading ? `${t.sending}..` : t.send}</span>
        </button>
      </div>
    </form>
  )
}

export default LetterForm
