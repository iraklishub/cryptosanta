'use client'

import { useState, useRef } from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import { verifyCaptchaToken } from '@/src/utils/recaptchaTokenAuth'
import { toast } from 'react-toastify'
import { Button, Field, MessageIcon, ExitIcon, LoadingSpinner } from '..'

const LetterForm = ({ cssTranslate, sitekey, lng, t, onExit }) => {
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
      const response = await axios.post('/api/send', data)

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
      className={`flex flex-col w-full h-fit md:w-2/3 lg:w-3/4 transition-opacity duration-300 bg-slate-900/70 text-white p-4 ${
        cssTranslate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col">
        <div className="relative text-center">
          <span className="capitalize text-center text-2xl">{t.letter}</span>
          <button type="button" className="absolute right-4" onClick={onExit}>
            <ExitIcon />
          </button>
        </div>
        <p className="bg-orange-100/80 text-stone-950 font-semibold mt-4 rounded-md px-6 py-4">
          {t.letter_text.dear_santa}, <br /> <br />
          {t.letter_text.doing_well} <br /> <br />
          {t.letter_text.my_name_is}{' '}
          <Field
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => setdata({ ...data, name: e.target.value })}
            required
            placeholder={t.name}
            className="w-36"
          />
          , <br /> <br />
          {t.letter_text.good_this_year}, {t.letter_text.ask_parents}{' '}
          <Field
            id="email"
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
            id="wish"
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
        <Button
          type="button"
          variant="outline"
          onClick={onExit}
          className="text-white border-white"
        >
          <span className="capitalize">{t.close}</span>
        </Button>
        <Button type="submit" disabled={!isVerified || isLoading} className="ml-2">
          {isLoading ? <LoadingSpinner /> : <MessageIcon />}
          <span className="ml-2 capitalize">{isLoading ? `${t.sending}..` : t.send}</span>
        </Button>
      </div>
    </form>
  )
}

export default LetterForm
