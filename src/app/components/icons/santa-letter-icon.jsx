import Image from 'next/image'
import santaLetterIcon from '@/public/assets/icons/merry-christmas.webp'

const SantaLetterIcon = ({ className }) => (
  <Image
    src={santaLetterIcon}
    priority
    width={25}
    height={25}
    alt="santaletterico"
    className={className}
  />
)

export default SantaLetterIcon
