import clsx from 'clsx'
import { forwardRef } from 'react'

const GeneratedCard = forwardRef(({ image, text, className, options }, ref) => {
  const { bold, italic, underline, align, font, color, size } = options
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
            'w-full min-h-screen md:min-h-0 text-wrap z-10 text-white text-md md:text-md lg:text-lg overflow-y-scroll',
            bold && 'font-bold',
            italic && 'italic',
            underline && 'underline',
            align === 'left' && 'text-left',
            align === 'center' && 'text-center',
            align === 'right' && 'text-right',
            align === 'justify' && 'text-justify'
          )}
        >
          {text}
        </pre>
      </div>
    </section>
  )
})

export default GeneratedCard
