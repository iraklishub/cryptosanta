import 'server-only'

const dictionaries = {
  en: () => import('./English.en.json').then((module) => module.default),
  ka: () => import('./Georgian.ka.json').then((module) => module.default)
}

export const getDictionary = async (locale) => dictionaries[locale]()
