import Aside from '../components/UI/aside/Aside'
import Header from '../components/UI/main/Header'
import Main from '../components/UI/main/Main'
import SideBar from '../components/UI/aside/SideBar'
import { useSideBar } from '../hooks/useSideBar'

interface Props {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: Props) {
  const { isAsideVisible, toggleAside, closeAside } = useSideBar()

  return (
    <div className="dashboard h-screen">
      <SideBar isVisible={isAsideVisible} onClose={closeAside} />
      <div className="aside lg:block hidden">
        <Aside />
      </div>

      <Header title={title} toggleAside={toggleAside} />

      <Main title={title}>{children}</Main>
    </div>
  )
}
