import Image from 'next/image'
import openseaBadgeIcon from '@/public/assets/icons/openseabadge.webp'

const OpenseaBadgeIcon = ({ className }) => (
  <Image
    src={openseaBadgeIcon}
    width={70}
    height={30}
    alt="openseabadgeico"
    className={className}
  />
)

export default OpenseaBadgeIcon
