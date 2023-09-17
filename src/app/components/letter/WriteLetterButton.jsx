import { Button, MessageIcon } from '..'

const WriteLetterButton = ({ label, onClick }) => (
  <Button
    type="button"
    onClick={onClick}
    variant="outline"
    className="h-fit shadow-2xl shadow-red-600 animate-bounce bg-white border-0"
  >
    <MessageIcon />
    <span className="ml-2 capitalize">{label}</span>
  </Button>
)

export default WriteLetterButton
