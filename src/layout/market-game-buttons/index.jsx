'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { JoystickIcon, GiftsIcon } from '@/src/components'
import { useTheme } from '@/src/utils/store'

const MarketGameButtons = () => {
  const { id } = useTheme((state) => state.theme)
  const isGrinch = id === 'grinch'

  const buttons = [
    {
      id: 'market',
      link: 'gifts',
      icon: <GiftsIcon />,
      title: 'Gifts Market'
    },
    {
      id: 'games',
      link: 'games',
      icon: <JoystickIcon />,
      title: 'Games'
    }
  ]

  return (
    <div className="flex flex-col items-center">
      {buttons.map(({ id, link, icon, title }) => (
        <Link
          key={id}
          href={`/${link}`}
          className={clsx(
            'shadow-lg mt-6 py-1 min-w-40 flex items-center justify-center bg-white hover:bg-gray-100 active:bg-white rounded',
            id === 'market' && 'min-w-44',
            isGrinch
              ? 'shadow-green-500 hover:shadow-green-600'
              : 'shadow-red-500 hover:shadow-red-600'
          )}
        >
          {icon}
          <span className="ml-1.5 text-slate-600 font-semibold capitalize">{title}</span>
        </Link>
      ))}
    </div>
  )
}

export default MarketGameButtons
