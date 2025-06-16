import Link from 'next/link'
import { LeftArrowExit, Xicon, TelegramIcon, EmailIcon } from '@/src/components'

export default function Page() {
  return (
    <>
      <header className="w-full pt-2 pl-2 flex">
        <Link
          href="/"
          className="text-white font-semibold flex w-auto hover:text-gray-100 active:text-white"
        >
          <LeftArrowExit className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Home Page</span>
        </Link>
      </header>
      <main className="p-4 w-full h-fit flex justify-center">
        <div className="bg-slate-200 p-8 rounded-md w-full prose prose-stone">
          <h2 className="text-2xl font-semibold text-center">Contact Information</h2>
          <hr className="border-black" />
          <ul className="mt-4 p-0">
            <li className="flex flex-wrap p-0 gap-2 items-center justify-center">
              <EmailIcon /> <strong className="hidden sm:inline">Email :</strong>
              <Link
                // href="mailto:contact@cryptosanta.online"
                href="mailto:"
                className="text-blue-500 hover:underline"
              >
                contact@cryptosanta.online
              </Link>
            </li>
            <hr className="border-black" />
            <li className="flex flex-wrap p-0 gap-2 items-center justify-center">
              <Xicon /> <strong className="hidden sm:inline">X (Twitter) :</strong>
              <Link
                // href="https://x.com/cryptosantax"
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                @cryptosantax
              </Link>
            </li>
            <hr className="border-black" />
            <li className="flex flex-wrap p-0 gap-2 items-center justify-center">
              <TelegramIcon /> <strong className="hidden sm:inline">Telegram :</strong>
              <Link
                href="https://t.me/cryptosantatg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                @cryptosantatg
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
