'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { useTheme } from '@/src/utils/store'
import { Button, MessageIcon, LoadingSpinner } from '../../components'
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
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [grinchLetterAnimation, setGrinchLetterAnimation] = useState(false)
  const [explotionAnimation, setExplotionAnimation] = useState(false)

  const exitForm = () => {
    setIsOpen(false)
    setIsFormOpen(false)
    setCssTranslate(false)
  }

  // form display animation
  const [cssTranslate, setCssTranslate] = useState(false)
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (isFormOpen) {
        setCssTranslate(true)
      }
    }, 1)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [isFormOpen])

  return (
    <>
      {isOpen ? (
        <div className="flex flex-col md:flex-row gap-5">
          <Button
            type="button"
            onClick={
              isGrinch
                ? () => setGrinchLetterAnimation(true)
                : () => {
                    setIsFormOpen('to_santa')
                    setIsOpen(false)
                  }
            }
            variant="outline"
            className="h-fit min-w-40 shadow-lg shadow-red-500 animate-bounce bg-white border-0 flex items-center justify-center"
          >
            <MessageIcon />
            <span className="ml-2">{t.to_santa || 'to Santa'}</span>
          </Button>
          <Button
            type="button"
            onClick={
              isGrinch
                ? () => setGrinchLetterAnimation(true)
                : () => {
                    setIsFormOpen('to_friend')
                    setIsOpen(false)
                  }
            }
            variant="outline"
            className="h-fit min-w-40 shadow-lg shadow-red-500 animate-bounce bg-white border-0 flex items-center justify-center"
          >
            <MessageIcon />
            <span className="ml-2">{t.to_friend || 'to Friend'}</span>
          </Button>
        </div>
      ) : (
        <Button
          type="button"
          onClick={isGrinch ? () => setGrinchLetterAnimation(true) : () => setIsOpen(true)}
          variant="outline"
          className="h-fit min-w-40 shadow-lg shadow-red-500 animate-bounce bg-white border-0 flex items-center justify-center"
        >
          <MessageIcon />
          <span className="ml-2 capitalize">{t.letter || 'letter'}</span>
        </Button>
      )}

      {isFormOpen ? (
        <div className="w-full max-h-fit min-h-full bg-slate-900/40 absolute top-0 left-0 flex items-center justify-center">
          <LetterForm
            cssTranslate={cssTranslate}
            sitekey={sitekey}
            lng={lng}
            t={t}
            onExit={exitForm}
            to={isFormOpen}
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
