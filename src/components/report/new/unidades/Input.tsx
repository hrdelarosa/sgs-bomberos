interface Props {
  name?: string
  description?: string
  className?: string
}

export default function Input({ name, description, className }: Props) {
  return (
    <div className="w-fit">
      <label
        htmlFor="inputname"
        className="block text-gray-800 font-semibold text-sm"
      >
        {name}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="inputname"
          className={`block ${
            className ? `${className}` : 'w-56'
          } rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
        />
      </div>
      {description && (
        <label className="pt-1 block text-gray-500 text-sm">
          {description}
        </label>
      )}
    </div>
  )
}
