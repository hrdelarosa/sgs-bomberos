import { SelectIcon } from '../../Icons'

interface Props {
  text: string
  handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  list: string[]
}

export default function Select({ text, handleChange, list }: Props) {
  return (
    <div className="w-[170px] h-16">
      <label className="block mb-1 text-gray-800 font-semibold text-sm">
        {text}
      </label>
      <div className="relative">
        <select
          onChange={handleChange}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray-400 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-200 hover:border-slate-600 appearance-none cursor-pointer"
        >
          {list.map((incidente) => (
            <option key={incidente} value={incidente}>
              {incidente}
            </option>
          ))}
        </select>
        <SelectIcon />
      </div>
    </div>
  )
}
