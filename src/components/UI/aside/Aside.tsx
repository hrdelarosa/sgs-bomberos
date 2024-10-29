import {
  BomberosIcon,
  DocumentIcon,
  GearIcon,
  HistoryIcon,
  HomeIcon,
} from '../../Icons'
import NavLink from './NavLink'

export default function Aside() {
  return (
    <aside className="h-full flex flex-col gap-6 w-72 px-5 py-4 bg-blue-600 text-white">
      <div className="flex flex-row justify-center">
        <BomberosIcon />
      </div>

      <nav className="flex flex-col justify-between h-full">
        <ul className="flex flex-col gap-1">
          <NavLink path="Inicio" to="/">
            <HomeIcon />
          </NavLink>

          <NavLink path="Historial" to="his">
            <HistoryIcon />
          </NavLink>

          <NavLink path="Nuevo Reporte" to="/report/new">
            <DocumentIcon />
          </NavLink>
          <li className="font-semibold p-2 rounded-md hover:bg-blue-700 text-blue-200">
            Perfil
          </li>
          <li className="font-semibold p-2 rounded-md hover:bg-blue-700 text-blue-200">
            Imprimir Reporte
          </li>
        </ul>

        <NavLink path="Configuración" to="/configuration">
          <GearIcon />
        </NavLink>
      </nav>
    </aside>
  )
}
