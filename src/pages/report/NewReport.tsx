import Card from '../../components/report/new/Card'
import DataContent from '../../components/report/new/datos/DataContent'
import Input from '../../components/report/new/datos/Input'
import SelectTime from '../../components/report/new/datos/SelectTime'
import Unidad from '../../components/report/new/unidades/Unidad'
import Checkbox from '../../components/UI/Checkbox'
import Container from '../../components/UI/Container'
import { INCIDENT_LIST } from '../../constans/incidentList'
import Layout from '../../layouts/Layout'

export default function NewReport() {
  return (
    <Layout title="Nuevo">
      <Container>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-2 lg:mb-4">
          Nuevo Servicio
        </h1>
        <form className="flex flex-col gap-2 md:w-full">
          <Card title="Datos del Servicio">
            <div className="flex flex-col items-center gap-2 p-4 lg:items-start lg:w-[870px]">
              <DataContent>
                <Input
                  name="Nombre"
                  description="Nombre del solicitante"
                  className="w-[462px] lg:w-[492px]"
                />
                <Input
                  name="Telefono"
                  description="Telefono del solictante"
                  className="w-40 lg:w-52"
                />

                <SelectTime text="Salida" />
              </DataContent>

              <DataContent>
                <Input
                  name="Ubicación"
                  description="Ubicación del servicio"
                  className="w-[494px] lg:w-[524px]"
                />
                <Input name="Folio" className="w-32 lg:w-44" />

                <SelectTime text="Llegada" />
              </DataContent>

              <DataContent>
                <SelectTime text="Control" />

                <SelectTime text="Base" />

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
                    {INCIDENT_LIST.map((incidente) => (
                      <option key={incidente} value={incidente}></option>
                    ))}
                  </datalist>
                </div>

                <Input name="Otro" className="w-44" />
              </DataContent>
            </div>
          </Card>

          <Card title="Unidades">
            <div className="flex flex-row justify-center lg:justify-normal lg:gap-6 gap-5 p-4 lg:w-[870px]">
              <Unidad unidad="Ambulancias">
                <Checkbox num="24" />
                <Checkbox num="35" />
                <Checkbox num="38" />
              </Unidad>

              <Unidad unidad="Pipas" cols="3">
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
        </form>
      </Container>
    </Layout>
  )
}
