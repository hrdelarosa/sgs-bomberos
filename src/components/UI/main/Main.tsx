interface Props {
  children: React.ReactNode
  title: string
}

export default function Main({ children }: Props) {
  return <main className="main bg-slate-100/65">{children}</main>
}