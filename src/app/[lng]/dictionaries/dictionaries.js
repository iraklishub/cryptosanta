import 'server-only'

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  ka: () => import('./ka.json').then((module) => module.default),
  uk: () => import('./uk.json').then((module) => module.default),
  sv: () => import('./sv.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
  sl: () => import('./sl.json').then((module) => module.default),
  sk: () => import('./sk.json').then((module) => module.default),
  sr: () => import('./sr.json').then((module) => module.default),
  ru: () => import('./ru.json').then((module) => module.default),
  ro: () => import('./ro.json').then((module) => module.default),
  pt: () => import('./pt.json').then((module) => module.default),
  no: () => import('./no.json').then((module) => module.default),
  lt: () => import('./lt.json').then((module) => module.default),
  lv: () => import('./lv.json').then((module) => module.default),
  ko: () => import('./ko.json').then((module) => module.default),
  ja: () => import('./ja.json').then((module) => module.default),
  it: () => import('./it.json').then((module) => module.default),
  ga: () => import('./ga.json').then((module) => module.default),
  is: () => import('./is.json').then((module) => module.default),
  hu: () => import('./hu.json').then((module) => module.default),
  el: () => import('./el.json').then((module) => module.default),
  de: () => import('./de.json').then((module) => module.default),
  fr: () => import('./fr.json').then((module) => module.default),
  fi: () => import('./fi.json').then((module) => module.default),
  et: () => import('./et.json').then((module) => module.default),
  nl: () => import('./nl.json').then((module) => module.default),
  da: () => import('./da.json').then((module) => module.default),
  cs: () => import('./cs.json').then((module) => module.default),
  hr: () => import('./hr.json').then((module) => module.default),
  bg: () => import('./bg.json').then((module) => module.default),
  be: () => import('./be.json').then((module) => module.default),
  hy: () => import('./hy.json').then((module) => module.default),
  pl: () => import('./pl.json').then((module) => module.default)
}

export const getDictionary = async (locale) => dictionaries[locale]()
