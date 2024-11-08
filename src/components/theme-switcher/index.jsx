'use client'

import { clsx } from 'clsx'
import { useState } from 'react'
import { Switch } from '..'
import { useTheme } from '@/src/utils/store'
import { SantaIcon, GrinchIcon } from '..'

const ThemeSwitcher = ({ className }) => {
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
    <div className={clsx('flex items-center text-white', className)}>
      <button type="button" onClick={() => setTheme('santa')}>
        <SantaIcon />
      </button>
      <Switch
        id="themeswitch"
        value={id}
        onChange={toggleTheme}
        checked={isGrinch}
        bgColor={isGrinch ? 'bg-green-600' : 'bg-red-600'}
        disabled={isLoading}
        className="mx-1"
      />
      <button type="button" onClick={() => setTheme('grinch')}>
        <GrinchIcon />
      </button>
    </div>
  )
}

export default ThemeSwitcher
