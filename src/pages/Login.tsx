import HeaderAuth from '../components/auth/HeaderAuth'

export default function Login() {
  return (
    <div className="h-[calc(100vh-64px)]">
      <HeaderAuth />
      <main className="h-full flex flex-col justify-center items-center">
        <div className="grid grid-cols-2">
          <section className=" bg-slate-500 rounded-s-xl">
            <span>
              Sistema de Gestión de Servicios del Departamento de Bomberos
            </span>
          </section>

          <div className="flex flex-col gap-3.5 px-10 py-10 bg-blue-300 rounded-e-xl">
            <span className="text-2xl font-medium mt-2">Iniciar Sesión</span>

            <form className="flex flex-col gap-2.5">
              <div>
                <label
                  htmlFor="inputname"
                  className="block text-gray-800 font-semibold text-sm"
                >
                  Correo Electronico
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="inputname"
                  className="block text-gray-800 font-semibold text-sm"
                >
                  Contraseña
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="inputname"
                    className="block w-full rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                </div>
              </div>
            </form>

            <button className="py-1.5 mt-4 text-white bg-blue-800 rounded-md">
              Inicia Sesión
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
