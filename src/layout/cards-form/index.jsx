'use client'

import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import html2canvas from 'html2canvas'
import Lottie from 'lottie-react'

import santaletterAnimationData from '@/src/constants/santa-letter-animation.json'
import grinchletterAnimationData from '@/src/constants/grinch-letter-animation.json'
import ImagesSection from './components/images-section'
import FormHeader from '../form-header'
import FormFooter from '../form-footer'
import { Tiptap } from '@/src/components'
import { cards } from '@/src//constants'

const CardsForm = ({ cssTranslate, isGrinch, onExit }) => {
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
        toast.success('Card Sent', {
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
        toast.error('Sending Failed', {
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

  // const handlePrint = () => {
  //   const printWindow = window.open('', '', 'height=500,width=800')

  //   // Clone the element and its contents
  //   const printContent = captureRef.current.cloneNode(true)

  //   // Write HTML content into the new window, including only the content of the ref
  //   printWindow.document.write('<html><head><title>Print</title>')

  //   // Optionally add custom styles
  //   printWindow.document.write(`
  //     <style>
  //       body { font-family: Arial, sans-serif; padding: 20px; }
  //       h1 { color: #333; }
  //       p { font-size: 14px; }
  //       img { max-width: 100%; } /* Make sure images scale well */
  //     </style>
  //   `)

  //   printWindow.document.write('</head><body>')

  //   // Append the cloned node to the body of the print window
  //   printWindow.document.body.appendChild(printContent)

  //   printWindow.document.write('</body></html>')
  //   printWindow.document.close() // Close the document to finalize it

  //   // Wait for images to load before printing
  //   const images = printContent.querySelectorAll('img')
  //   let loadedImagesCount = 0

  //   images.forEach((img) => {
  //     // If the image is already loaded, increment the count
  //     if (img.complete) {
  //       loadedImagesCount++
  //     } else {
  //       // Otherwise, wait for it to load
  //       img.onload = () => {
  //         loadedImagesCount++
  //         // If all images are loaded, trigger the print
  //         if (loadedImagesCount === images.length) {
  //           printWindow.print()
  //         }
  //       }
  //     }
  //   })

  //   // If there are no images, print immediately
  //   if (images.length === 0) {
  //     printWindow.print()
  //   }

  //   // Optionally close the print window after printing is done
  //   printWindow.onafterprint = () => printWindow.close()
  // }

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
        title={isGrinch ? 'Grinch Card' : 'Santa Card'}
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
          placeholder="Fill this text area with love and holiday joy! 🎄✨"
          ref={captureRef}
          card={state.card}
        />
      </section>

      <FormFooter
        title={isLoading ? 'Sharing' : 'Share'}
        onExit={onExit}
        disabled={!state.text || isLoading}
        isLoading={isLoading}
      />
      {/* <button type="button" onClick={handlePrint}>
        print
      </button> */}
    </form>
  )
}

export default CardsForm
