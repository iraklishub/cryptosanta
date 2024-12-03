import Image from 'next/image'
import santaicon from '@/public/assets/icons/santa.webp'

const SantaIcon = ({ className }) => (
  <Image src={santaicon} priority alt="santaico" className={`w-7 h-auto ${className || ''}`} />
)

export default SantaIcon
