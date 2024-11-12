import Image from 'next/image'
import santaicon from '@/public/assets/icons/santa.webp'

const SantaIcon = ({ className }) => (
  <Image src={santaicon} priority width={30} height={30} alt="santaico" className={className} />
)

export default SantaIcon
