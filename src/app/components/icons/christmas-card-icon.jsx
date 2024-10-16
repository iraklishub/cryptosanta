import Image from 'next/image'
import christmasCardIcon from '@/public/assets/icons/christmas-card.webp'

const ChristmasCardIcon = ({ className }) => (
  <Image
    src={christmasCardIcon}
    priority
    width={25}
    height={25}
    alt="christmascardico"
    className={className}
  />
)

export default ChristmasCardIcon
