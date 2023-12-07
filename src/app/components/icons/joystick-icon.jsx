import Image from 'next/image'
import joystickicon from '@/public/assets/icons/joystick.webp'

const JoystickIcon = () => (
  <Image src={joystickicon} priority width={30} height={30} alt="joystickico" />
)

export default JoystickIcon
