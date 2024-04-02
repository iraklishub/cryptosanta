'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { useTheme } from '@/src/utils/store'
import { toast } from 'react-toastify'
import { Button, MessageIcon, LoadingSpinner } from '../../components'
import { translationNotCompleted } from '../../constants'
import Lottie from 'lottie-react'
import grinchletterAnimationData from '../../constants/grinch-letter-animation.json'
import explotionAnimationData from '../../constants/explotion-animation.json'

const LetterForm = dynamic(() => import('../letter-form'), {
  loading: () => <LoadingSpinner className="border-white w-8 h-8 border-4" />
})

const WriteLetter = ({ t, sitekey, lng }) => {
  const { id } = useTheme((state) => state.theme)
  const isGrinch = id === 'grinch'

  const [isOpen, setIsOpen] = useState(false)
  const [warningDisplay, setWarningDisplay] = useState(false)
  const [grinchLetterAnimation, setGrinchLetterAnimation] = useState(false)
  const [explotionAnimation, setExplotionAnimation] = useState(false)

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

  const toastMessageWithLink = () => (
    <>
      Translation may not be correct, help us fix. Contact{' '}
      <Link
        href="https://www.facebook.com/profile.php?id=61551568490085&mibextid=ZbWKwL"
        target="_blank"
        className="italic"
      >
        {t.here || 'here'} 💬
      </Link>
    </>
  )

  useEffect(() => {
    if (translationNotCompleted.includes(lng)) {
      setWarningDisplay(true)
      if (warningDisplay) {
        toast.warn(toastMessageWithLink, {
          position: 'top-center',
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          limit: 1,
          progress: undefined,
          theme: 'light'
        })
      }
    }
  }, [warningDisplay])

  return (
    <>
      <Button
        type="button"
        onClick={isGrinch ? () => setGrinchLetterAnimation(true) : () => setIsOpen(true)}
        variant="outline"
        className="h-fit min-w-40 shadow-lg shadow-red-500 animate-bounce bg-white border-0"
      >
        <MessageIcon />
        <span className="ml-2 capitalize">{t.write_letter || 'Write letter'}</span>
      </Button>
      {isOpen ? (
        <div className="w-full max-h-fit min-h-full bg-slate-900/40 absolute top-0 left-0 flex items-center justify-center">
          <LetterForm
            cssTranslate={cssTranslate}
            sitekey={sitekey}
            lng={lng}
            t={t}
            onExit={exitForm}
          />
        </div>
      ) : (
        grinchLetterAnimation &&
        (explotionAnimation ? (
          <Lottie
            loop={false}
            animationData={explotionAnimationData}
            style={{ width: 500, position: 'absolute' }}
            onComplete={() => {
              setExplotionAnimation(false)
              setGrinchLetterAnimation(false)
            }}
          />
        ) : (
          <Lottie
            loop={false}
            animationData={grinchletterAnimationData}
            style={{ width: 300, position: 'absolute' }}
            onComplete={() => {
              setExplotionAnimation(true)
            }}
          />
        ))
      )}
    </>
  )
}

export default WriteLetter
