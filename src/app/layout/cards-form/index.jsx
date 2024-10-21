'use client'

import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import html2canvas from 'html2canvas'
import Lottie from 'lottie-react'
import santaletterAnimationData from '../../constants/santa-letter-animation.json'
import grinchletterAnimationData from '../../constants/grinch-letter-animation.json'
import Cards from './components/cards'
import FormHeader from '../form-header'
import FormFooter from '../form-footer'
import GeneratedCard from './components/generated-card'
import { Tiptap } from '@/src/app/components'

const CardsForm = ({ cssTranslate, isGrinch, t, onExit }) => {
  const captureRef = useRef()
  const [isLoading, setisLoading] = useState(false)
  const [letterAnimation, setLetterAnimation] = useState(false)

  const cards = [
    {
      id: 1,
      img: 'https://i.seadn.io/gae/5r0xsU5zEAs8D9b2x_DD3-tZ0E_IgT5j4QQhs2imTSWgG1uobxrjPbYK0s22BZ23J9w5ODeebAS5AHOLvkpMTptjYWZtphlvTi5B?auto=format&dpr=1&w=1000'
    },
    {
      id: 2,
      img: 'https://i.seadn.io/gae/awlHMs7ZVRLxuiJJ84CylogTTmTYRUTt_pPdWI6oED_60LOGSnH5pnQxpceQcQvUQL7uM4BQlPaBJuvn-pq7xkatOuqj2_nc3SCkeKk?auto=format&dpr=1&w=1000'
    },
    {
      id: 3,
      img: 'https://i.seadn.io/gae/paj0i3NrC-csXVgL3kO5ERvSTCKpp-XsbGgOfXq2ZKINobqiaBQ4sPX9FG4pMW8TqT_S45dsMAW0xaJdjQsjWwo9EOwKOrKlN6AOhGE?auto=format&dpr=1&w=1000'
    }
  ]

  const [state, setState] = useState({
    text: '',
    card: cards[0]
  })

  const handleShare = async (e) => {
    e.preventDefault()
    setisLoading(true)

    const canvas = await html2canvas(captureRef.current, {
      allowTaint: true,
      useCORS: true,
      backgroundColor: null
    })

    const dataUrl = canvas.toDataURL()
    const blob = await (await fetch(dataUrl)).blob()
    const filesArray = [
      new File([blob], 'nft-christmas-card.jpg', {
        type: 'image/jpeg',
        lastModified: new Date().getTime()
      })
    ]

    const shareData = {
      files: filesArray
    }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
        setLetterAnimation(true)
        toast.success(t['Sent'], {
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
      } catch (error) {
        console.error('Error sharing:', error)
        toast.error(t['Sending Failed'], {
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
        setisLoading(false)
      }
    } else {
      setisLoading(false)
      alert('Share not supported')
    }
  }

  return letterAnimation ? (
    <Lottie
      loop={false}
      animationData={isGrinch ? grinchletterAnimationData : santaletterAnimationData}
      style={{ width: 300, color: isGrinch ? 'red' : 'green' }}
      onComplete={onExit}
    />
  ) : (
    <form
      onSubmit={handleShare}
      className={`
        flex flex-col gap-6 w-full min-h-screen lg:w-11/12 transition-opacity duration-300 bg-slate-900/70 text-white py-6 px-4
        ${cssTranslate ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <FormHeader
        title={isGrinch ? t['Grinch Card'] || 'Grinch Card' : t['Santa Card'] || 'Santa Card'}
        isGrinch={isGrinch}
        onExit={onExit}
        className="w-full"
      />

      <section className="flex flex-col md:flex-row flex-grow gap-2">
        <Cards
          title={t['Choose Design'] || 'Choose Design'}
          card={state.card}
          setState={setState}
          isGrinch={isGrinch}
          cards={cards}
        />

        <Tiptap onChange={(e) => setState((prev) => ({ ...prev, text: e }))} />

        <GeneratedCard ref={captureRef} image={state.card.img} text={state.text} />
      </section>

      <FormFooter
        title={isLoading ? `${t['Sharing'] || 'Sharing'}..` : t['Share'] || 'Share'}
        onExit={onExit}
        t={t}
        disabled={!state.text || isLoading}
        isLoading={isLoading}
      />
    </form>
  )
}

export default CardsForm
