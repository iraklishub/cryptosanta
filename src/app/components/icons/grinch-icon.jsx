import Image from 'next/image'
import grinchicon from '@/public/assets/icons/grinch.webp'

const GrinchIcon = () => <Image src={grinchicon} priority width={30} height={30} alt="grinchico" />

export default GrinchIcon
