import {
  BomberosIcon,
  DocumentIcon,
  FolderOpenIcon,
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
          <li className="mb-3">
            <NavLink path="Inicio" to="/">
              <HomeIcon />
            </NavLink>
          </li>

          <li className="mb-3 flex flex-col gap-1">
            <div className="mb-1">
              <span className="text-sm text-blue-200 font-semibold ml-2 mt-6">
                Servicios
              </span>
            </div>
            <NavLink path="Reportes de Servicios" to="/report/new">
              <FolderOpenIcon />
            </NavLink>
            <NavLink path="Nuevo Reporte" to="/report/new">
              <DocumentIcon />
            </NavLink>
          </li>

          <li>
            <NavLink path="Historial" to="his">
              <HistoryIcon />
            </NavLink>
          </li>

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
