import clsx from 'clsx'
import { Button, LoadingSpinner, MessageIcon } from '@/src/app/components'

const FormFooter = ({ title, onExit, t, disabled, isLoading, className }) => {
  return (
    <div className={clsx('mt-4 flex justify-end z-10', className)}>
      <Button type="button" variant="outline" onClick={onExit} className="text-white border-white">
        <span className="capitalize text-sm md:text-base">{t['Close'] || 'Close'}</span>
      </Button>
      <Button type="submit" disabled={disabled} className="ml-2">
        {isLoading ? <LoadingSpinner /> : <MessageIcon />}
        <span className="ml-2 capitalize text-sm md:text-base">{title}</span>
      </Button>
    </div>
  )
}

export default FormFooter
