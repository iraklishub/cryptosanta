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
        <pre
          className={clsx(
            'w-full min-h-screen md:min-h-0 text-wrap z-10 text-white overflow-y-scroll'
          )}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </section>
  )
})

export default GeneratedCard
