interface Props {
  unidad: string
  children: React.ReactNode
}

export default function Unidad({ unidad, children }: Props) {
  return (
    <div className="flex flex-col gap-1 md:w-fit">
      <div>
        <span>{unidad}</span>
      </div>

      <div className="grid grid-cols-2 gap-1.5">{children}</div>
    </div>
  )
}
