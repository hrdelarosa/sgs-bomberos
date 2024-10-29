import { useAutoAnimate } from '@formkit/auto-animate/react'

export function useAutoAnimation() {
  const [animationParent] = useAutoAnimate()

  return { animationParent }
}
