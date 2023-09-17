'use client'

import { usePathname, useRouter } from 'next/navigation'
import { i18n } from '@/i18n'
import { clsx } from 'clsx'
import Select from 'react-select'

const LanguageSwitcher = ({ title, className }) => {
  const pathName = usePathname()
  const router = useRouter()
  const { localeOptions } = i18n

  const handleLanguageChange = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return router.push(segments.join('/'))
  }

  const styles = {
    option: (styles) => ({
      ...styles,
      cursor: 'pointer'
    }),
    control: (styles) => ({
      ...styles,
      cursor: 'pointer'
    })
  }
  const components = {
    IndicatorSeparator: () => null
  }

  return (
    <div className={clsx('flex items-center', className)}>
      <div className="font-extrabold flex font-black text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-current stroke-[3px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
        <span className="capitalize ml-1 text_shadow">{title}:</span>
      </div>
      <Select
        id="languageselect"
        instanceId="languageselect"
        className="ml-2"
        styles={styles}
        components={components}
        options={localeOptions}
        value={localeOptions.find((e) => e.value === pathName.slice(1, 3))}
        onChange={(e) => handleLanguageChange(e.value)}
      />
    </div>
  )
}

export default LanguageSwitcher
