import Image from 'next/image'
import joystickicon from '@/public/assets/icons/joystick.webp'

const JoystickIcon = ({ className }) => (
  <Image
    src={joystickicon}
    priority
    width={30}
    height={30}
    alt="joystickico"
    className={className}
  />
)

export default JoystickIcon
