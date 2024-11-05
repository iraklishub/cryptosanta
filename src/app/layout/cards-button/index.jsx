'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import clsx from 'clsx'

import { useTheme } from '@/src/utils/store'
import { Button, ChristmasCardIcon, LoadingSpinner } from '../../components'

const CardsForm = dynamic(() => import('../cards-form'), {
  loading: () => <LoadingSpinner className="border-white w-8 h-8 border-4" />
})

const CardsButton = ({ t }) => {
  const { id } = useTheme((state) => state.theme)
  const isGrinch = id === 'grinch'

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

  return (
    <>
      <Button
        type="button"
        onClick={() => setIsOpen(true)}
        variant="outline"
        className={clsx(
          'h-fit min-w-40 mt-6 shadow-lg bg-white border-0 flex items-center justify-center',
          isGrinch
            ? 'shadow-green-500 hover:shadow-green-600'
            : 'shadow-red-500 hover:shadow-red-600'
        )}
      >
        <ChristmasCardIcon />
        <span className="ml-2 capitalize">{t['Holiday Cards'] || 'Holiday Cards'}</span>
      </Button>

      {isOpen && (
        <div className="w-full max-h-fit min-h-full bg-slate-900/40 absolute top-0 left-0 flex items-center justify-center">
          <CardsForm cssTranslate={cssTranslate} isGrinch={isGrinch} t={t} onExit={exitForm} />
        </div>
      )}
    </>
  )
}

export default CardsButton
