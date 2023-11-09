'use client'

import { useState } from 'react'
import { Switch } from '..'
import { useTheme } from '@/src/utils/store'
import { LoadingSpinner } from '..'
import SantaIcon from '../icons/santa-icon'
import GrinchIcon from '../icons/grinch-icon'

const index = () => {
  const {
    theme: { id },
    setTheme
  } = useTheme((state) => state)
  const [isLoading, setIsLoading] = useState(false)

  const isGrinch = id === 'grinch'

  const toggleTheme = () => {
    setIsLoading(true)
    switch (id) {
      case 'santa':
        setTheme('grinch')
        setIsLoading(false)
        break
      case 'grinch':
        setTheme('santa')
        setIsLoading(false)
        break
      default:
        setIsLoading(false)
        break
    }
  }

  return (
    <div className="flex items-center mr-6 text-white">
      <SantaIcon />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Switch
          id="themeswitch"
          value={id}
          onChange={toggleTheme}
          checked={isGrinch}
          bgColor={isGrinch ? 'bg-green-600' : 'bg-red-600'}
          className="mr-1"
        />
      )}
      <GrinchIcon />
    </div>
  )
}

export default index
