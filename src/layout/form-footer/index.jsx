import { Button, LoadingSpinner, MessageIcon } from '@/src/components'

const FormFooter = ({ title, onExit, disabled, isLoading, className }) => (
  <div className={`mt-4 flex justify-end z-10 ${className || ''}`}>
    <Button type="button" variant="outline" onClick={onExit} className="text-white border-white">
      <span className="capitalize text-sm md:text-base">Close</span>
    </Button>
    <Button type="submit" disabled={disabled} className="ml-2">
      {isLoading ? <LoadingSpinner /> : <MessageIcon />}
      <span className="ml-2 capitalize text-sm md:text-base">{title}</span>
    </Button>
  </div>
)

export default FormFooter
