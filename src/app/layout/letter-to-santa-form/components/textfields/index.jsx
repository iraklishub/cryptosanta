import { Field } from '@/src/app/components'

const TextFields = ({ data, setdata, t }) => {
  return (
    <div className="flex flex-col flex-grow md:flex-row gap-4 flex-wrap bg-orange-100/80 text-stone-950 font-semibold mt-4 rounded-md px-6 py-4">
      <Field
        id="name"
        type="text"
        value={data.name}
        onChange={(e) => setdata({ ...data, name: e.target.value })}
        required
        placeholder={t['Your Name'] || 'Your Name'}
        className="w-full md:w-36 placeholder:capitalize text-sm md:text-base"
      />
      <textarea
        name="text"
        value={data.text}
        onChange={(e) => setdata({ ...data, text: e.target.value })}
        wrap="hard"
        required
        placeholder={t['Letter Text'] || 'Letter Text'}
        className="w-full h-80 flex-grow border-t-0 bg-transparent text-sm md:text-base outline-0 placeholder:text-neutral-500 border-neutral-700 border rounded-b-md px-2 md:px-4 py-2 placeholder:capitalize"
      />
    </div>
  )
}

export default TextFields
