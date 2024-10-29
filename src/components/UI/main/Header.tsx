import { BarsIcon } from '../../Icons'

interface Props {
  title: string
  toggleAside: () => void
}
export default function Header({ title, toggleAside }: Props) {
  return (
    <header className="header sticky top-0 z-10 h-16 content-center px-9 bg-white shadow-sm">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row justify-center items-center gap-2.5 sm:gap-6 lg:hidden">
          <button
            onClick={toggleAside}
            className="p-1 rounded hover:bg-slate-100"
          >
            <BarsIcon />
          </button>

          <div className="w-px h-6 bg-gray-600 opacity-20"></div>

          <div>
            <h1 className="text-base sm:text-xl md:text-2xl font-semibold">
              {title}
            </h1>
          </div>
        </div>

        <h1 className="lg:block hidden text-3xl font-semibold">{title}</h1>

        <div className="flex flex-row items-center gap-5">
          {/* <label className="relative inline-block h-6 w-12 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-900">
            <input
              className="peer sr-only"
              id="AcceptConditions"
              type="checkbox"
            />
            <span className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-gray-300 ring-[4px] ring-inset ring-white transition-all peer-checked:start-7 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
          </label>

          <div className="w-px h-6 bg-gray-600 opacity-20"></div> */}

          <div className="flex flex-row gap-3">
            <div className="flex items-center justify-center size-9  bg-blue-100 rounded-full">
              R
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-medium">Roberto De la Rosa</span>
              <small className="text-xs text-gray-600">Administrador</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
