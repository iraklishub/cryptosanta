import Image from 'next/image'
import geckoTerminalIcon from '@/public/assets/icons/geckoterminal.png'

const GeckoTerminalIcon = ({ className }) => (
  <Image
    src={geckoTerminalIcon}
    width={30}
    height={30}
    alt="geckoterminalico"
    className={className}
  />
)

export default GeckoTerminalIcon
