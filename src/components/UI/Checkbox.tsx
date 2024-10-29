interface Props {
  num: string
}

export default function Checkbox({ num }: Props) {
  return (
    <label className="flex flex-row gap-1.5 justify-between items-center w-fit px-1.5 py-1 bg-slate-100/80 rounded">
      <input
        className="border-white-400/20 transition-all duration-300 ease-in checked:scale-110 size-4"
        type="checkbox"
      />
      {num}
    </label>
  )
}
