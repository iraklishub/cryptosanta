'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, MessageIcon, LoadingSpinner } from '../../components'
import Lottie from 'lottie-react'
import santaletterAnimationData from '../../constants/santa-letter-animation.json'
import FormHeader from '../form-header'
import TextFields from './components/textfields'
import FormFooter from '../form-footer'

const LetterToSantaForm = ({ cssTranslate, t, onExit }) => {
  const [isLoading, setisLoading] = useState(false)
  const [letterAnimation, setLetterAnimation] = useState(false)

  const [data, setdata] = useState({
    name: '',
    text: ''
  })

  const sendLetter = async (e) => {
    e.preventDefault()
    setisLoading(true)

    setLetterAnimation(true)

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
        flex flex-col w-full h-screen md:h-fit md:w-1/2 transition-opacity duration-300 bg-slate-900/70 text-white p-4
        ${cssTranslate ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <FormHeader
        title={t['Letter to Santa'] || 'Letter to Santa'}
        isGrinch={false}
        onExit={onExit}
        className="w-full"
      />
      <TextFields data={data} setdata={setdata} t={t} />
      <FormFooter
        title={isLoading ? `${t['Sending'] || 'Sending'}..` : t['Send'] || 'Send'}
        onExit={onExit}
        t={t}
        disabled={!data.name || !data.text || isLoading}
        isLoading={isLoading}
      />
    </form>
  )
}

export default LetterToSantaForm
