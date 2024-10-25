import clsx from 'clsx'
import { forwardRef } from 'react'
import { LoadingSpinner } from '@/src/app/components'

const GeneratedCard = forwardRef(({ card, text, className }, ref) => {
  return (
    <section ref={ref} className="w-full lg:w-5/12 relative z-20">
      <LoadingSpinner className="absolute top-1/2 left-1/2 w-10 h-10 z-0 border-4" />
      <div
        className={`flex p-1.5 justify-center items-center relative z-50 ${className || ''}`}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${card?.img || ''})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundOrigin: 'border-box'
        }}
      >
        <pre
          className={clsx(
            'min-h-screen lg:min-h-0 text-wrap text-black overflow-y-auto',
            card.id === 1 && 'w-64 h-72',
            card.id === 2 && 'w-56 h-64 mt-5',
            card.id === 3 && 'w-64 h-80 mt-16',
            card.id === 4 && 'w-72 h-72',
            card.id === 5 && 'w-60 h-72 ml-8 mb-5',
            card.id === 6 && 'w-64 h-72 ml-12 mt-4',
            card.id === 7 && 'w-60 h-72 mt-14',
            card.id === 8 && 'w-72 h-72',
            card.id === 9 && 'w-72 h-72 mt-16',
            card.id === 10 && 'w-72 h-64',
            card.id === 11 && 'w-72 h-80 ml-4 mb-6',
            card.id === 12 && 'w-80 h-96 ml-4'
          )}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  )
})

export default GeneratedCard
