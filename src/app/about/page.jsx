import Link from 'next/link'
import { LeftArrowExit } from '@/src/components'

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
        <div className="bg-slate-200 p-8 rounded-md prose prose-stone">
          <h2 className="text-3xl font-bold text-center mb-6">
            🎅 SantaBabu: Ho-Ho-Hodl Your Way to the Holidays! 🎄
          </h2>
          <p className="text-lg indent-4">
            Welcome to SantaBabu, where the blockchain meets holiday magic. This isn't just another
            project/token; it's the Santa of tokens—dropping cheer, laughs, and opportunities all
            year round. Whether you're dreaming of a green Christmas or just here for the memes,
            SantaBabu is your ticket to a jolly ride on the sleigh of Web3.
          </p>
          <p className="text-lg mt-4 indent-4">
            With SANTA tokens in your stocking, you're not just hodling; you're ho-ho-hodling! Our
            growing community is packed with holiday believers and crypto enthusiasts who know that
            the spirit of giving (dand trading) never goes out of style.
          </p>
          <p className="text-lg mt-4 indent-4">
            No empty promises of moon missions—just a steady sleigh ride powered by community vibes
            and holiday cheer. SantaBabu is here to wrap up the blockchain in tinsel and bring
            everyone a reason to smile.
          </p>
          <p className="text-lg mt-4 font-semibold">
            Whether you're naughty, nice, or somewhere in between, SantaBabu is ready to welcome you
            to the most festive corner of the crypto world. Why wait for December? Start celebrating
            now.
          </p>
        </div>
      </main>
    </>
  )
}
