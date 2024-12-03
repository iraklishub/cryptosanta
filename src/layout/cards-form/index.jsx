'use client'

import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import html2canvas from 'html2canvas'

import ImagesSection from './components/images-section'
import FormHeader from '../form-header'
import FormFooter from '../form-footer'
import { Tiptap, Button } from '@/src/components'
import { cards } from '@/src/constants'

const CardsForm = ({ cssTranslate, isGrinch, onExit }) => {
  const captureRef = useRef()
  const [isLoading, setisLoading] = useState(false)

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
        toast.success('Card Shared', {
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
        toast.error('Share Failed', {
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

  const handlePrint = async () => {
    // Use html2canvas to capture the content of the captureRef element
    const canvas = await html2canvas(captureRef.current, {
      allowTaint: true,
      useCORS: true,
      backgroundColor: null
    })

    // Create an image element to display the captured content
    const img = new Image()
    img.src = canvas.toDataURL()

    // Open a new print window with a default size (it will be resized later based on content)
    const printWindow = window.open('', '', `width=800,height=1200`)

    // Wait for the image to load before writing it into the print window
    img.onload = () => {
      // Write the HTML content to the print window, including the image
      printWindow.document.write('<html><head><title>Print</title>')

      // Add custom styles for print to ensure portrait orientation and scaling
      printWindow.document.write(`
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 0;
            margin: 0;
            overflow: hidden;
          }
          @page {
            size: A4 portrait;  /* Force portrait orientation */
            margin: 0;
          }
          .print-content {
            width: 100%;
            height: 100%;
            transform-origin: 0 0; /* Align to top-left corner */
            overflow: hidden;
          }
          img {
            max-width: 100%;
            height: auto;
            transform: scale(0.85); /* Scale the image to fit the page */
          }
        </style>
      `)

      printWindow.document.write('</head><body>')

      // Create a wrapper div and append the image
      const wrapper = printWindow.document.createElement('div')
      wrapper.classList.add('print-content')
      wrapper.appendChild(img)

      printWindow.document.body.appendChild(wrapper)

      printWindow.document.write('</body></html>')
      printWindow.document.close() // Finalize document

      // Wait for images to load before printing
      img.onload = () => {
        printWindow.print()
      }

      // Optionally close the print window after printing is done
      printWindow.onafterprint = () => printWindow.close()
    }
  }

  return (
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
          stateCardID={state.card?.id}
          setState={setState}
          isGrinch={isGrinch}
          cards={filteredCards}
        />

        <Tiptap
          onChange={(e) => setState((prev) => ({ ...prev, text: e }))}
          ref={captureRef}
          card={state.card}
        />
      </section>

      <FormFooter title={isLoading ? 'Sharing' : 'Share'} onExit={onExit} isLoading={isLoading}>
        <Button type="button" onClick={handlePrint} className="ml-2">
          <span className="capitalize text-sm md:text-base">Print</span>
        </Button>
      </FormFooter>
    </form>
  )
}

export default CardsForm
