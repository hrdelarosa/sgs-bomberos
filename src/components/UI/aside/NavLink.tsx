import { Link, useMatch, useResolvedPath } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  path: string
  to: string
}

export default function NavLink({ children, path, to }: Props) {
  const resolvedPath = useResolvedPath(to)
  const isMatch = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link
      to={to}
      className={
        isMatch
          ? 'flex flex-row gap-3 items-center font-semibold p-2 rounded-md bg-blue-700 text-white'
          : 'flex flex-row gap-3 items-center font-semibold p-2 rounded-md hover:bg-blue-700 hover:text-white text-blue-200'
      }
    >
      {children}
      <span>{path}</span>
    </Link>
  )
}
