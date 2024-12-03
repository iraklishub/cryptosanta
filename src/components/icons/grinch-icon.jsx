import Image from 'next/image'
import grinchicon from '@/public/assets/icons/grinch.webp'

const GrinchIcon = ({ className }) => (
  <Image src={grinchicon} priority alt="grinchico" className={`w-7 h-auto ${className || ''}`} />
)

export default GrinchIcon
