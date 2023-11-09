import { Button, MessageIcon } from '..'
import clsx from 'clsx'

const WriteLetterButton = ({ label, onClick, className }) => (
  <Button
    type="button"
    onClick={onClick}
    variant="outline"
    className={clsx('h-fit shadow-2xl shadow-red-600 animate-bounce bg-white border-0', className)}
  >
    <MessageIcon />
    <span className="ml-2 capitalize">{label}</span>
  </Button>
)

export default WriteLetterButton
