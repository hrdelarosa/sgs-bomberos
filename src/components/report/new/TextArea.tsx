interface Props {
  name: string
  type: string
  placeholder?: string
}

export default function TextArea({ name, type, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-1 md:w-fit">
      <div>
        <span className="text-gray-800 font-semibold text-sm">{name}</span>
      </div>

      <textarea
        id="message"
        name={`textArea${type}`}
        rows={4}
        className="block p-2.5 w-full h-full resize-none text-sm text-gray-900 bg-slate-100/80 rounded-lg ring-1 ring-inset ring-gray-400"
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}
