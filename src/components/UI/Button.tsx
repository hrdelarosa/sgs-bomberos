interface Props {
  children: React.ReactNode
}

export default function Button({ children }: Props) {
  return (
    <button className="flex items-center gap-1.5 py-1.5 px-6 rounded-md bg-blue-600 hover:bg-white hover:text-blue-600 focus:text-blue-600 focus:bg-gray-200 text-gray-50 text-sm font-semibold leading-loose transition-colors duration-200 ease-out">
      {children}
    </button>
  )
}
