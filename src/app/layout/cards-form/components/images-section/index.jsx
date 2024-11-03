'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Switch } from '@/src/app/components'
import CardsList from '../cards-list'
import NFTsList from '../nfts-list'

const CardsNFTsSection = ({ titles, stateCardID, setState, isGrinch, cards, className }) => {
  const [checked, setChecked] = useState(false)
  return (
    <section
      className={clsx(
        'flex flex-col w-full items-center mb-2',
        'md:w-5/12 md:mb-0 md:relative',
        'xl:w-7/12',
        className
      )}
    >
      <div
        className={clsx(
          'flex items-center mb-5 text-white',
          isGrinch ? 'lightning-green' : 'lightning-red'
        )}
      >
        <button type="button" onClick={() => setTheme('santa')}>
          {titles.cards}
        </button>
        <Switch
          id="cardsswitch"
          value={checked}
          onChange={() => setChecked((prev) => !prev)}
          checked={checked}
          bgColor={checked ? 'bg-blue-600' : 'bg-red-600'}
          className="mx-2"
        />
        <button type="button" onClick={() => setTheme('grinch')}>
          {titles.nfts}
        </button>
      </div>
      <div className="flex gap-2 justify-items-center overflow-auto md:grid md:grid-cols-2 xl:grid-cols-3">
        {checked ? (
          <NFTsList
            isGrinch={isGrinch}
            choosedCardID={stateCardID}
            onClick={(c) => setState((prev) => ({ ...prev, card: c }))}
          />
        ) : (
          <CardsList
            cards={cards}
            isGrinch={isGrinch}
            choosedCardID={stateCardID}
            onClick={(c) => setState((prev) => ({ ...prev, card: c }))}
          />
        )}
      </div>
    </section>
  )
}

export default CardsNFTsSection
