import { useState } from 'react'
import Layout from '../../layouts/Layout'
import Container from '../../components/UI/Container'
import DataContent from '../../components/report/new/datos/DataContent'
import Card from '../../components/report/new/Card'
import Input from '../../components/report/new/datos/Input'
import SelectTime from '../../components/report/new/datos/SelectTime'
import Unidad from '../../components/report/new/unidades/Unidad'
import Checkbox from '../../components/UI/Checkbox'
import Select from '../../components/report/new/Select'
import TextArea from '../../components/report/new/TextArea'
import { DAÑOS_MATERIALES, INCIDENT_LIST } from '../../constants/incidentList'
import { useAutoAnimation } from '../../hooks/useAutoAnimation'
import IncidentContent from '../../components/report/new/incident/IncidentContent'

export default function NewReport() {
  const [incidentType, setIncidentType] = useState('')
  const { animationParent } = useAutoAnimation()

  const handleIncidentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncidentType(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const fiels = Object.fromEntries(
      new FormData(event.target as HTMLFormElement).entries()
    )

    console.log(fiels)
  }

  return (
    <Layout title="Nuevo">
      <Container>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-2 lg:mb-4">
          Nuevo Servicio
        </h1>
        <form
          ref={animationParent}
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 md:w-full"
        >
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

              <DataContent animation={true}>
                <SelectTime text="Control" />

                <SelectTime text="Base" />

                <Select
                  text="Incidentes"
                  handleChange={handleIncidentChange}
                  list={INCIDENT_LIST}
                />

                {incidentType === 'Otro' && (
                  <Input name="Otro" className="w-44" />
                )}
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
                  <span className="text-gray-800 font-semibold text-sm">
                    Rescate
                  </span>
                </div>

                <div>
                  <input
                    type="text"
                    name="inputname"
                    className={`block bg-slate-100/80 w-14 rounded-md py-1 px-1.5 ring-1 ring-inset ring-gray-400 focus:text-gray-800`}
                  />
                </div>
              </div>

              <TextArea
                name="Adicionales"
                type="Unidades"
                placeholder="Vehiculos Adicionales"
              />
            </div>
          </Card>

          <IncidentContent incidentType={incidentType} />

          <Card title="Daños">
            <div className="flex flex-row justify-center lg:justify-normal lg:gap-6 gap-5 p-4 lg:w-[870px]">
              <Select text="Materiales" list={DAÑOS_MATERIALES} />
              <TextArea name="Especifique" type="EspecifiqueDañosMateriales" />

              <div className="w-[1.5px] h-32 bg-gray-600 opacity-20"></div>
            </div>
          </Card>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </Container>
    </Layout>
  )
}
