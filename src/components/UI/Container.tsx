import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="px-5 lg:px-7 pt-5 pb-7 lg:block flex flex-col items-center">
      {children}
    </div>
  )
}
