const TextFields = ({ data, setdata }) => {
  return (
    <div className="flex justify-center flex-grow items-center text-stone-950 font-semibold mt-4 rounded-md z-10">
      <textarea
        name="text"
        value={data.text}
        onChange={(e) => setdata({ ...data, text: e.target.value })}
        wrap="hard"
        required
        placeholder="Letter Text"
        className="w-72 sm:w-80 xl:w-96 h-64 px-1 pt-1 ml-4 mt-10 sm:mt-8 md:mt-6 xl:mt-4 bg-transparent border-t-0 text-xl outline-0 placeholder:text-neutral-600 placeholder:capitalize resize"
        style={{ fontFamily: 'cursive' }}
      />
    </div>
  )
}

export default TextFields
