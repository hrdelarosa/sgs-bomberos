interface Props {
  text: string
}

export default function SelectTime({ text }: Props) {
  return (
    <div className="w-fit">
      <label
        htmlFor="inputname"
        className="block text-gray-800 font-semibold text-sm"
      >
        {text}
      </label>
      <div className="mt-2">
        <input
          type="time"
          name="inputname"
          className={`block text-sm rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
        />
      </div>
    </div>
  )
}
