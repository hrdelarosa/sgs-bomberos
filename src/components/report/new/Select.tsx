interface Props {
  text: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  list: string[]
}

export default function Select({ text, handleChange, list }: Props) {
  return (
    <div className="flex flex-col mb-0.5">
      <label
        htmlFor="incidentes"
        className="block text-gray-800 font-semibold text-sm"
      >
        {text}:
      </label>
      <div className="mt-2">
        <input
          className={`block text-sm h-[30px] rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
          list={`list${text}`}
          name={`list${text}`}
          placeholder={text}
          onChange={handleChange}
        />
      </div>

      <datalist id={`list${text}`}>
        {list.map((incidente) => (
          <option key={incidente} value={incidente}></option>
        ))}
      </datalist>
    </div>
  )
}
