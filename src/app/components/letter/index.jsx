'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import WriteLetterButton from './WriteLetterButton'
import { toast } from 'react-toastify'
import { LoadingSpinner } from '..'
import { translationNotCompleted } from '../../constants'

const LetterForm = dynamic(() => import('./LetterForm'), {
  loading: () => <LoadingSpinner color="white" size="6" />
})

const Letter = ({ t, sitekey, lng }) => {
  const [isOpen, setIsOpen] = useState(false)

  const exitForm = () => {
    setIsOpen(false)
    setCssTranslate(false)
  }

  // form display animation
  const [cssTranslate, setCssTranslate] = useState(false)
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (isOpen) {
        setCssTranslate(true)
      }
    }, 1)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [isOpen])

  useEffect(() => {
    if (translationNotCompleted.includes(lng)) {
      toast.warn(t.warning, {
        position: 'top-center',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark'
      })
    }
  }, [])

  return isOpen ? (
    <div className="w-full max-h-fit min-h-full bg-slate-900/40 absolute top-0 left-0 flex items-center justify-center">
      <LetterForm cssTranslate={cssTranslate} sitekey={sitekey} lng={lng} t={t} onExit={exitForm} />
    </div>
  ) : (
    <>
      <WriteLetterButton label={t.write_letter} onClick={() => setIsOpen(true)} />
    </>
  )
}

export default Letter
