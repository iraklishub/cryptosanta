import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const CardsList = ({ cards, choosedCardID, isGrinch, onClick }) => {
  return cards.map((c) => (
    <Image
      key={c?.id}
      src={c?.img}
      width={80}
      height={80}
      alt="card"
      placeholder="blur"
      blurDataURL={
        isGrinch
          ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUuSm1CgADwwGz6P/1bwAAAABJRU5ErkJggg=='
          : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DgAgAESgFFab83HQAAAABJRU5ErkJggg=='
      }
      className={clsx(
        'cursor-pointer rounded-sm md:w-24 lg:w-28',
        choosedCardID === c?.id && 'border-white border-2'
      )}
      onClick={() => onClick(c)}
    />
  ))
}

export default CardsList
