'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

import { useTheme } from '@/src/utils/store'
import { Button, SantaLetterIcon, LoadingSpinner } from '@/src/components'
import Lottie from 'lottie-react'
import grinchletterAnimationData from '@/src/constants/grinch-letter-animation.json'
import explotionAnimationData from '@/src/constants/explotion-animation.json'

const LetterToSantaForm = dynamic(() => import('../letter-to-santa-form'), {
  loading: () => <LoadingSpinner className="border-white w-8 h-8 border-4" />
})

const WriteToSantaButton = () => {
  const { id } = useTheme((state) => state.theme)
  const isGrinch = id === 'grinch'

  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <>
      <Button
        type="button"
        onClick={isGrinch ? () => setGrinchLetterAnimation(true) : () => setIsOpen(true)}
        variant="outline"
        className={clsx(
          'h-fit min-w-40 shadow-lg bg-white border-0 flex items-center justify-center',
          isGrinch
            ? 'shadow-green-500 hover:shadow-green-600'
            : 'shadow-red-500 hover:shadow-red-600'
        )}
      >
        <SantaLetterIcon />
        <span className="ml-2">to Santa</span>
      </Button>

      {isOpen && (
        <div className="w-full max-h-fit min-h-full bg-slate-900/40 absolute top-0 left-0 flex items-center justify-center">
          <LetterToSantaForm cssTranslate={cssTranslate} onExit={exitForm} isGrinch={isGrinch} />
        </div>
      )}

      {grinchLetterAnimation &&
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
        ))}
    </>
  )
}

export default WriteToSantaButton
