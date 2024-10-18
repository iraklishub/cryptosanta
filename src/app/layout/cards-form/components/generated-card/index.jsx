import clsx from 'clsx'
import { forwardRef } from 'react'

const GeneratedCard = forwardRef(({ image, text, className }, ref) => {
  return (
    <section ref={ref} className="w-full md:w-5/12">
      <div
        className={`flex p-1.5 justify-center ${className || ''}`}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundOrigin: 'border-box'
        }}
      >
        <p
          // todo: delete text size classnames
          className={clsx(
            'w-full min-h-screen md:min-h-0 text-wrap z-10 text-white text-md md:text-lg lg:text-xl overflow-y-scroll'
          )}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  )
})

export default GeneratedCard
