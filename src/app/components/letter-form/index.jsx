'use client'

import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'react-toastify'
import { verifyCaptchaToken } from '@/src/utils/recaptchaTokenAuth'
import { Button, Field } from '..'

const LetterForm = ({ t, sitekey, lng, className }) => {
  const recaptchaRef = useRef(null)

  const [isVerified, setIsverified] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  const [data, setdata] = useState({
    name: '',
    email: '',
    wish: '',
    mailData: {
      subjectText: t.subject,
      t
    }
  })

  const sendLetter = async (e) => {
    e.preventDefault()
    setisLoading(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(data)
      })

      if (response.status === 200) {
        setdata({
          name: '',
          email: '',
          wish: '',
          mailData: {
            subjectText: t.subject,
            t
          }
        })
      }
    } catch (error) {
      console.log(error)
      console.error(error)
      toast.error(t.sending_failed, {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    } finally {
      recaptchaRef.current.reset()
      setIsverified(false)
      setisLoading(false)
      toast.success(t.sent, {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    }
  }

  async function handleCaptchaSubmission(token) {
    // Server function to verify captchaToken
    await verifyCaptchaToken(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }

  return (
    <form
      onSubmit={sendLetter}
      className={`flex flex-col bg-slate-900/60 text-white p-4 ${className}`}
    >
      <div className="flex flex-col">
        <span className="capitalize text-center text-2xl">{t.letter}</span>
        <p className="bg-orange-100/80 text-stone-950 font-semibold mt-4 rounded-md px-6 py-4">
          {t.letter_text.dear_santa}, <br /> <br />
          {t.letter_text.doing_well} <br /> <br />
          {t.letter_text.my_name_is}{' '}
          <Field
            type="text"
            value={data.name}
            onChange={(e) => setdata({ ...data, name: e.target.value })}
            required
            placeholder={t.letter_text.your_name}
            className="w-36"
          />
          , <br /> <br />
          {t.letter_text.good_this_year}, {t.letter_text.ask_parents}{' '}
          <Field
            type="email"
            value={data.email}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
            required
            placeholder={t.letter_text.parent_email}
            className="mt-4"
          />
          <br /> <br />
          {t.letter_text.gift_this_christmas}{' '}
          <Field
            type="text"
            value={data.wish}
            onChange={(e) => setdata({ ...data, wish: e.target.value })}
            required
            placeholder={t.letter_text.wish}
            className="w-full"
          />
          <br /> <br />
          {t.letter_text.merry_christmas_happy_new_year} <br /> <br />
          {t.letter_text.with_love}, {data.name}.
          <br />
        </p>
      </div>
      <div className="mt-4 h-20">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={sitekey}
          onChange={handleCaptchaSubmission}
          hl={lng}
          theme="dark"
        />
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="submit" disabled={!isVerified || isLoading}>
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
        </Button>
      </div>
    </form>
  )
}

export default LetterForm
