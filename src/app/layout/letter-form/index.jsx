'use client'

import { useState, useRef } from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import Link from 'next/link'
import { verifyCaptchaToken } from '@/src/utils/recaptchaTokenAuth'
import { toast } from 'react-toastify'
import { Button, Field, MessageIcon, ExitIcon, LoadingSpinner, Switch } from '../../components'
import Lottie from 'lottie-react'
import santaletterAnimationData from '../../constants/santa-letter-animation.json'

const LetterForm = ({ cssTranslate, sitekey, lng, t, onExit }) => {
  const recaptchaRef = useRef(null)

  const [isVerified, setIsverified] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [letterAnimation, setLetterAnimation] = useState(false)

  const [data, setdata] = useState({
    name: '',
    email: '',
    wish: ''
  })

  const sendLetter = async (e) => {
    e.preventDefault()
    setisLoading(true)

    const request = { ...data, subject: t.subject }

    try {
      const response = await axios.post('/api/send', request)

      if (response.status === 200) {
        setdata({
          name: '',
          email: '',
          wish: ''
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
        draggable: false,
        progress: undefined,
        theme: 'light'
      })
    } finally {
      recaptchaRef.current.reset()
      setLetterAnimation(true)
      setIsverified(false)
      setisLoading(false)
      toast.success(t.sent, {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'light',
        delay: 2500
      })
    }
  }

  async function handleCaptchaSubmission(token) {
    // Server function to verify captchaToken
    await verifyCaptchaToken(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }

  return letterAnimation ? (
    <Lottie
      loop={false}
      animationData={santaletterAnimationData}
      style={{ width: 300, color: 'red' }}
      onComplete={onExit}
    />
  ) : (
    <form
      onSubmit={sendLetter}
      className={`flex flex-col w-full h-fit md:w-2/3 lg:w-3/4 transition-opacity duration-300 bg-slate-900/70 text-white p-4 ${
        cssTranslate ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col">
        <div className="relative text-center">
          <span className="capitalize text-center text-2xl">{t.letter || 'letter'}</span>
          <button type="button" className="absolute right-4" onClick={onExit}>
            <ExitIcon />
          </button>
        </div>
        <div className="mt-4 md:px-6 flex justify-around md:justify-start md:items-center md:gap-x-5">
          {/*options*/}
        </div>
        <div className="bg-orange-100/80 text-stone-950 font-semibold mt-4 rounded-md px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 flex-wrap">
            <Field
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => setdata({ ...data, name: e.target.value })}
              required
              placeholder={t.name || 'first name'}
              className="w-full md:w-36 placeholder:capitalize"
            />
            <Field
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setdata({ ...data, email: e.target.value })}
              required
              placeholder={t.parent_email || "Parent's email"}
              className="w-full md:w-52 placeholder:capitalize"
            />
            <textarea
              name="wish"
              value={data.wish}
              onChange={(e) => setdata({ ...data, wish: e.target.value })}
              wrap="hard"
              required
              placeholder={t.letter_text || 'letter text'}
              className="w-full h-80 border-t-0 bg-transparent outline-0 placeholder:text-neutral-500 border-neutral-700 border rounded-b-md px-4 py-2 placeholder:capitalize"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 h-fit flex flex-col md:flex-row">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={sitekey}
          onChange={handleCaptchaSubmission}
          hl={lng}
          theme="dark"
        />
        <span className="mt-2 md:ml-2 text-gray-300">
          By clicking Send, you agree to our{' '}
          <Link href={`/${lng}/privacy`} className="text-blue-400" target="_blank">
            privacy policy
          </Link>
        </span>
      </div>
      <div className="mt-4 flex justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={onExit}
          className="text-white border-white"
        >
          <span className="capitalize">{t.close || 'Close'}</span>
        </Button>
        <Button type="submit" disabled={!isVerified || isLoading} className="ml-2">
          {isLoading ? <LoadingSpinner /> : <MessageIcon />}
          <span className="ml-2 capitalize">
            {isLoading ? `${t.sending || 'sending'}..` : t.send || 'send'}
          </span>
        </Button>
      </div>
    </form>
  )
}

export default LetterForm
