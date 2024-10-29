export default function HeaderAuth() {
  return (
    <header className="flex flex-row justify-between items-center h-16 px-16">
      <div className="flex flex-row gap-2 items-center ">
        <img className="size-12" src="/public/images/logoBomberos.png" alt="" />
        <h1 className="text-2xl font-semibold">Bomberos</h1>
      </div>

      <nav>
        <a className="bg-blue-400 py-1.5 px-3 rounded">Regístrarse</a>
      </nav>
    </header>
  )
}
