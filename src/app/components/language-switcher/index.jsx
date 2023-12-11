'use client'

import { usePathname, useRouter } from 'next/navigation'
import { i18n } from '@/i18n'
import { clsx } from 'clsx'
import Select from 'react-select'

const LanguageSwitcher = ({ className }) => {
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
    <Select
      className={clsx('w-32', className)}
      id="languageselect"
      instanceId="languageselect"
      styles={styles}
      components={components}
      options={localeOptions}
      value={localeOptions.find((e) => e.value === pathName.slice(1, 3))}
      onChange={(e) => handleLanguageChange(e.value)}
    />
  )
}

export default LanguageSwitcher
