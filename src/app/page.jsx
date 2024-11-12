import { ThemeSwitcher, ConnectWallet, WalletIcon } from '@/src/components'
import { CardsButton, WriteToSantaButton, MarketGameButtons } from '../layout'

export default async function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-between relative">
      <header className="flex justify-between gap-4 md:justify-end items-center w-full p-2 pt-4 md:p-4">
        <ThemeSwitcher />
        <ConnectWallet
          label={
            <>
              <WalletIcon />
              <span className="ml-2">Login</span>
            </>
          }
          className="secondary-connect-wallet"
        />
      </header>
      <main className="p-4 w-full h-full flex flex-col justify-center items-center">
        <WriteToSantaButton />
        <CardsButton />
        <MarketGameButtons />
      </main>
    </div>
  )
}
