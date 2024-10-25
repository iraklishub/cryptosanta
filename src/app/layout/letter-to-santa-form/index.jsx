'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import Image from 'next/image'
import Lottie from 'lottie-react'
import santaletterAnimationData from '../../constants/santa-letter-animation.json'
import FormHeader from '../form-header'
import TextFields from './components/textfields'
import FormFooter from '../form-footer'

const LetterToSantaForm = ({ cssTranslate, t, onExit, isGrinch }) => {
  const [isLoading, setisLoading] = useState(false)
  const [letterAnimation, setLetterAnimation] = useState(false)

  const [data, setdata] = useState({
    text: ''
  })

  const sendLetter = async (e) => {
    e.preventDefault()
    setisLoading(true)

    setLetterAnimation(true)

    setisLoading(false)
    toast.success(t['Letter Sent'], {
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

    // const request = { ...data, subject: t.christmas_wishes }
    // try {
    //   const response = await axios.post('/api/send', request)

    //   if (response.status === 200) {
    //     setdata({
    //       name: '',
    //       email: '',
    //       wish: ''
    //     })
    //   }
    // } catch (error) {
    // } finally {
    // }
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
      className={`
        flex flex-col relative w-full h-screen md:w-1/2 transition-opacity text-white duration-300
        ${cssTranslate ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <Image
        src="https://res.cloudinary.com/sbbcd/image/upload/v1729537094/santababu/cards/10_gkvbn7.jpg"
        fill
        quality={60}
        placeholder="blur"
        alt="santa letter background"
        blurDataURL={
          isGrinch
            ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUuSm1CgADwwGz6P/1bwAAAABJRU5ErkJggg=='
            : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DgAgAESgFFab83HQAAAABJRU5ErkJggg=='
        }
        className="object-cover"
      />
      <FormHeader
        title={t['Letter to Santa'] || 'Letter to Santa'}
        isGrinch={false}
        onExit={onExit}
        className="w-full z-10 p-4"
      />
      <TextFields data={data} setdata={setdata} t={t} />
      <FormFooter
        title={isLoading ? `${t['Sending'] || 'Sending'}..` : t['Send'] || 'Send'}
        onExit={onExit}
        t={t}
        disabled={!data.text || isLoading}
        isLoading={isLoading}
        className="p-2"
      />
    </form>
  )
}

export default LetterToSantaForm
