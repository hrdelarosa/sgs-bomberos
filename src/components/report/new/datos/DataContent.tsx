interface Props {
  children: React.ReactNode
}

export default function DataContent({ children }: Props) {
  return <div className="flex flex-row gap-3">{children}</div>
}
