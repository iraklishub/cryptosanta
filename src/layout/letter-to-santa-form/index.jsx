'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import Image from 'next/image'
import Lottie from 'lottie-react'
import santaletterAnimationData from '@/src/constants/santa-letter-animation.json'
import FormHeader from '../form-header'
import TextFields from './components/textfields'
import FormFooter from '../form-footer'
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'

const LetterToSantaForm = ({ cssTranslate, onExit, isGrinch }) => {
  const [isLoading, setisLoading] = useState(false)
  const [letterAnimation, setLetterAnimation] = useState(false)

  const { sendTransactionAsync } = useSendTransaction()

  const [data, setdata] = useState({
    text: ''
  })

  const sendLetter = async (e) => {
    e.preventDefault()
    setisLoading(true)

    try {
      await sendTransactionAsync({
        to: '0x1a811AF6AD8C8A37973e7ee42cE45c360ae24033',
        value: parseEther('0.001'),
        data: '0x' + Buffer.from(data.text).toString('hex')
      })

      setLetterAnimation(true)
      setisLoading(false)
      toast.success('Letter Sent', {
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
    } catch (err) {
      setisLoading(false)
      toast.error(`Error: ${err}`, {
        position: 'top-left',
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'light',
        delay: 2500
      })
    }

    // Resend Email fetch

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
        src="https://res.cloudinary.com/sbbcd/image/upload/v1733247691/cryptosanta/cards/santaletter_dzwlzx.jpg"
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
        sizes="100%"
      />
      <FormHeader
        title="Letter to Santa"
        isGrinch={false}
        onExit={onExit}
        className="w-full z-10 p-4"
      />
      <TextFields data={data} setdata={setdata} />
      <FormFooter
        title={isLoading ? 'Sending' : 'Send'}
        onExit={onExit}
        disabled={!data.text || isLoading}
        isLoading={isLoading}
        className="p-2"
      />
    </form>
  )
}

export default LetterToSantaForm
