import 'server-only'

const dictionaries = {
  en: () => import('./English.en.json').then((module) => module.default),
  es: () => import('./Spanish.es.json').then((module) => module.default),
  de: () => import('./German.de.json').then((module) => module.default),
  fr: () => import('./French.fr.json').then((module) => module.default),
  pt: () => import('./Portuguese.pt.json').then((module) => module.default),
  nl: () => import('./Dutch.nl.json').then((module) => module.default),
  it: () => import('./Italian.it.json').then((module) => module.default),
  pl: () => import('./Polish.pl.json').then((module) => module.default),
  uk: () => import('./Ukrainian.uk.json').then((module) => module.default),
  ru: () => import('./Russian.ru.json').then((module) => module.default),
  cs: () => import('./Czech.cs.json').then((module) => module.default),
  hr: () => import('./Croatian.hr.json').then((module) => module.default),
  sr: () => import('./Serbian.sr.json').then((module) => module.default),
  sk: () => import('./Slovak.sk.json').then((module) => module.default),
  sl: () => import('./Slovenian.sl.json').then((module) => module.default),
  be: () => import('./Belarusian.be.json').then((module) => module.default),
  bg: () => import('./Bulgarian.bg.json').then((module) => module.default),
  sv: () => import('./Swedish.sv.json').then((module) => module.default),
  da: () => import('./Danish.da.json').then((module) => module.default),
  no: () => import('./Norwegian.no.json').then((module) => module.default),
  is: () => import('./Icelandic.is.json').then((module) => module.default),
  ga: () => import('./Irish.ga.json').then((module) => module.default),
  fi: () => import('./Finnish.fi.json').then((module) => module.default),
  et: () => import('./Estonian.et.json').then((module) => module.default),
  lt: () => import('./Lithuanian.lt.json').then((module) => module.default),
  lv: () => import('./Latvian.lv.json').then((module) => module.default),
  ro: () => import('./Romanian.ro.json').then((module) => module.default),
  hu: () => import('./Hungarian.hu.json').then((module) => module.default),
  el: () => import('./Greek.el.json').then((module) => module.default),
  ka: () => import('./Georgian.ka.json').then((module) => module.default),
  hy: () => import('./Armenian.hy.json').then((module) => module.default),
  ja: () => import('./Japanese.ja.json').then((module) => module.default),
  ko: () => import('./Korean.ko.json').then((module) => module.default)
}

export const getDictionary = async (locale) => dictionaries[locale]()
