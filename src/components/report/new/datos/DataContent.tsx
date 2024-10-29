import { useAutoAnimation } from '../../../../hooks/useAutoAnimation'

interface Props {
  children: React.ReactNode
  animation?: boolean
}

// export default function DataContent({ children }: Props) {
export default function DataContent({ children, animation = false }: Props) {
  const { animationParent } = useAutoAnimation()
  return (
    <div
      ref={animation ? animationParent : null}
      className="flex flex-row gap-3"
    >
      {children}
    </div>
  )
}
