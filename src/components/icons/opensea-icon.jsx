import Image from 'next/image'
import openseaIcon from '@/public/assets/icons/opensea.webp'

const OpenseaIcon = ({ className }) => (
  <Image src={openseaIcon} width={20} height={20} alt="openseaico" className={className} />
)

export default OpenseaIcon
