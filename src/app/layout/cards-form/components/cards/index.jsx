import clsx from 'clsx'
import Image from 'next/image'

const CardsSection = ({ title, card, setState, isGrinch, cards, className }) => {
  return (
    <section
      className={clsx('flex flex-col w-full items-center mb-2', 'lg:w-2/12', 'lg:mb-0', className)}
    >
      <span
        className={clsx(
          'capitalize text-center text-sm lg:text-base mb-4',
          isGrinch ? 'lightning-green' : 'lightning-red'
        )}
      >
        {title}
      </span>
      <div className="flex w-full gap-2 justify-items-center overflow-auto lg:grid lg:grid-cols-2">
        {cards.map((c) => (
          <Image
            key={c.id}
            src={c.img}
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
              'cursor-pointer rounded-sm lg:w-24',
              card.id === c.id && 'border-white border-2'
            )}
            onClick={() => setState((prev) => ({ ...prev, card: c }))}
          />
        ))}
      </div>
    </section>
  )
}

export default CardsSection
