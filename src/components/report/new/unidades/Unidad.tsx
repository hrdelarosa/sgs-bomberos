interface Props {
  unidad: string
  children: React.ReactNode
  cols?: string
}

export default function Unidad({ unidad, children, cols }: Props) {
  return (
    <div className="flex flex-col gap-1 md:w-fit">
      <div>
        <span className="text-sm text-gray-800 font-semibold">{unidad}</span>
      </div>

      {cols === undefined ? (
        <div className={`grid grid-cols-2 gap-1.5`}>{children}</div>
      ) : (
        <div className={`grid grid-cols-3 gap-1.5`}>{children}</div>
      )}
    </div>
  )
}
