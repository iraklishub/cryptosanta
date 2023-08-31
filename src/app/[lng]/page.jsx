import { getDictionary } from './dictionaries/dictionaries'

export default async function Page({ params: { lng } }) {
  const dict = await getDictionary(lng)
  return <main className="">{dict.home_page}</main>
}
