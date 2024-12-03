'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Switch, OpenseaIcon } from '@/src/components'
import CardsList from '../cards-list'
import NFTsList from '../nfts-list'

const CardsNFTsSection = ({ titles, stateCardID, setState, isGrinch, cards, className }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (checked) {
      setState((prev) => ({ ...prev, card: undefined }))
    } else {
      setState((prev) => ({ ...prev, card: cards[0] }))
    }
  }, [checked])

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
        <button type="button" onClick={() => setChecked(false)}>
          {titles.cards}
        </button>
        <Switch
          id="cardsswitch"
          value={checked}
          onChange={() => setChecked((prev) => !prev)}
          checked={checked}
          bgColor={checked ? 'bg-blue-600' : isGrinch ? 'bg-green-600' : 'bg-red-600'}
          className="mx-2"
        />
        <button type="button" onClick={() => setChecked(true)} className="relative">
          {titles.nfts} <OpenseaIcon className="absolute top-0.5 -right-2/3" />
        </button>
      </div>
      {checked ? (
        <NFTsList
          isGrinch={isGrinch}
          choosedCardID={stateCardID}
          onClick={(c) => setState((prev) => ({ ...prev, card: c }))}
        />
      ) : (
        <div className="flex gap-2 justify-items-center overflow-auto md:grid md:grid-cols-2 xl:grid-cols-3">
          <CardsList
            cards={cards}
            isGrinch={isGrinch}
            choosedCardID={stateCardID}
            onClick={(c) => setState((prev) => ({ ...prev, card: c }))}
          />
        </div>
      )}
    </section>
  )
}

export default CardsNFTsSection
