import Card from '../../components/report/new/Card'
import Input from '../../components/report/new/unidades/Input'
import Unidad from '../../components/report/new/unidades/Unidad'
import Checkbox from '../../components/UI/Checkbox'
import Container from '../../components/UI/Container'
import Layout from '../../layouts/Layout'

export default function NewReport() {
  return (
    <Layout title="Nuevo">
      <Container>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-2 lg:mb-4">
          Nuevo Servicio
        </h1>
        <section className="flex flex-col gap-2 md:w-full">
          <div className="bg-white rounded-xl w-fit pt-3">
            <div className="pb-3 border-b border-gray-600/15">
              <label className="font-semibold text-gray-600 w-full ml-6">
                Datos del Servicio
              </label>
            </div>

            <div className="flex flex-col gap-2 p-4 w-[870px]">
              <div className="flex flex-row gap-3">
                <Input
                  name="Nombre"
                  description="Nombre del solicitante"
                  className="w-[492px]"
                />
                <Input
                  name="Telefono"
                  description="Telefono del solictante"
                  className="w-52"
                />

                <div className="w-fit">
                  <label
                    htmlFor="inputname"
                    className="block text-gray-800 font-semibold text-sm"
                  >
                    Salida
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      name="inputname"
                      className={`block text-sm rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3">
                <Input
                  name="Ubicación"
                  description="Ubicación del servicio"
                  className="w-[524px]"
                />
                <Input name="Folio" className="w-44" />

                <div className="w-fit">
                  <label
                    htmlFor="inputname"
                    className="block text-gray-800 font-semibold text-sm"
                  >
                    Llegada
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      name="inputname"
                      className={`block text-sm rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3">
                <div className="w-fit">
                  <label
                    htmlFor="inputname"
                    className="block text-gray-800 font-semibold text-sm"
                  >
                    Control
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      name="inputname"
                      className={`block text-sm rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
                    />
                  </div>
                </div>

                <div className="w-fit">
                  <label
                    htmlFor="inputname"
                    className="block text-gray-800 font-semibold text-sm"
                  >
                    Base
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      name="inputname"
                      className={`block text-sm rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="incidentes"
                    className="block text-gray-800 font-semibold text-sm"
                  >
                    Incidentes:
                  </label>
                  <div className="mt-2">
                    <input
                      className={`block text-sm h-[30px] rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
                      list="incidentes-list"
                      id="incidentes"
                      name="incidentes"
                      placeholder="Incidente"
                    />
                  </div>

                  <datalist id="incidentes-list">
                    <option value="Incendio"></option>
                    <option value="Fuga o Derrame"></option>
                    <option value="Rescate"></option>
                    <option value="Abejas"></option>
                    <option value="Otro"></option>
                  </datalist>
                </div>
              </div>
            </div>
          </div>

          <Card title="Unidades">
            <div className="grid grid-cols-4 md:flex md:flex-row md:justify-center md:flex-wrap md:w-full lg:flex lg:flex-row gap-7 md:gap-5 p-4 w-[870px]">
              <Unidad unidad="Ambulancias">
                <Checkbox num="24" />
                <Checkbox num="35" />
                <Checkbox num="38" />
              </Unidad>

              <Unidad unidad="Pipas">
                <Checkbox num="11" />
                <Checkbox num="12" />
                <Checkbox num="33" />
                <Checkbox num="34" />
                <Checkbox num="47" />
                <Checkbox num="48" />
                <Checkbox num="49" />
              </Unidad>

              <Unidad unidad="Motobombas">
                <Checkbox num="16" />
                <Checkbox num="25" />
              </Unidad>

              <Unidad unidad="Camionetas">
                <Checkbox num="10" />
                <Checkbox num="17" />
                <Checkbox num="32" />
                <Checkbox num="41" />
              </Unidad>

              <div className="flex flex-col gap-1 md:w-fit">
                <div className="">
                  <span>Rescate</span>
                </div>

                <div>
                  <input
                    type="text"
                    name="inputname"
                    className={`block bg-slate-100/80 w-14 rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 md:w-fit">
                <div className="">
                  <span>Adicionales</span>
                </div>

                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full h-full resize-none text-sm text-gray-900 bg-slate-100/80 rounded-lg ring-1 ring-inset ring-gray-400"
                  placeholder="Vehiculos Adicionales"
                ></textarea>
              </div>
            </div>
          </Card>

          {/* <div className="bg-white rounded-xl w-fit md:w-full pt-3">
            <div className="pb-3 border-b border-gray-600/15">
              <label className="font-semibold text-gray-600 w-full ml-6">
                Unidades
              </label>
            </div>

            <div className="grid grid-cols-4 md:flex md:flex-row md:justify-center md:flex-wrap md:w-full lg:flex lg:flex-row gap-7 md:gap-5 p-4 w-[870px]">
              <Unidad unidad="Ambulancias">
                <Checkbox num="24" />
                <Checkbox num="35" />
                <Checkbox num="38" />
              </Unidad>

              <Unidad unidad="Pipas">
                <Checkbox num="11" />
                <Checkbox num="12" />
                <Checkbox num="33" />
                <Checkbox num="34" />
                <Checkbox num="47" />
                <Checkbox num="48" />
                <Checkbox num="49" />
              </Unidad>

              <Unidad unidad="Motobombas">
                <Checkbox num="16" />
                <Checkbox num="25" />
              </Unidad>

              <Unidad unidad="Camionetas">
                <Checkbox num="10" />
                <Checkbox num="17" />
                <Checkbox num="32" />
                <Checkbox num="41" />
              </Unidad>

              <div className="flex flex-col gap-1 md:w-fit">
                <div className="">
                  <span>Rescate</span>
                </div>

                <div>
                  <input
                    type="text"
                    name="inputname"
                    className={`block bg-slate-100/80 w-14 rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1 md:w-fit">
                <div className="">
                  <span>Adicionales</span>
                </div>

                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full h-full resize-none text-sm text-gray-900 bg-slate-100/80 rounded-lg ring-1 ring-inset ring-gray-400"
                  // placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>
          </div> */}
        </section>
      </Container>
    </Layout>
  )
}
