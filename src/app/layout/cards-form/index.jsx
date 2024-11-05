'use client'

import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import html2canvas from 'html2canvas'
import Lottie from 'lottie-react'
import santaletterAnimationData from '../../constants/santa-letter-animation.json'
import grinchletterAnimationData from '../../constants/grinch-letter-animation.json'
import ImagesSection from './components/images-section'
import FormHeader from '../form-header'
import FormFooter from '../form-footer'
import { Tiptap } from '@/src/app/components'
import { cards } from '../../constants'

const CardsForm = ({ cssTranslate, isGrinch, t, onExit }) => {
  const captureRef = useRef()
  const [isLoading, setisLoading] = useState(false)
  const [letterAnimation, setLetterAnimation] = useState(false)

  const filteredCards = isGrinch
    ? cards.filter((card) => card.isGrinch)
    : cards.filter((card) => !card.isGrinch)

  const [state, setState] = useState({
    text: '',
    card: filteredCards[0]
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
        toast.success(t['Card Sent'], {
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
      alert('Share is not supported from your Browser')
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
        flex flex-col gap-6 min-h-screen w-full sm:w-10/12 md:w-full lg:w-10/12 xl:w-8/12 transition-opacity duration-300 bg-slate-900/70 text-white py-6 px-4
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
        <ImagesSection
          titles={{ cards: 'Cards', nfts: 'NFTs' }}
          stateCardID={state.card.id}
          setState={setState}
          isGrinch={isGrinch}
          cards={filteredCards}
        />

        <Tiptap
          onChange={(e) => setState((prev) => ({ ...prev, text: e }))}
          placeholder={t['Fill this text area with love and holiday joy']}
          ref={captureRef}
          card={state.card}
        />
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
