interface Props {
  title: string
  children: React.ReactNode
}

export default function Card({ title, children }: Props) {
  return (
    <div className="bg-white rounded-xl w-fit md:w-full pt-3">
      <div className="pb-3 border-b border-gray-600/15">
        <label className="font-semibold text-gray-600 w-full ml-6">
          {title}
        </label>
      </div>
      {children}
    </div>
  )
}
