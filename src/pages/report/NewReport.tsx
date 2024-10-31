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
import IncidentContent from '../../components/report/new/incident/IncidentContent'
import ContentButtons from '../../components/report/new/ContentButtons'
import { DAÑOS_MATERIALES, INCIDENT_LIST } from '../../constants/incidentList'
import { useAutoAnimation } from '../../hooks/useAutoAnimation'

export default function NewReport() {
  const [incidentType, setIncidentType] = useState('Incendio')
  const { animationParent } = useAutoAnimation()

  const handleIncidentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
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
          className="flex flex-col gap-3 w-full"
        >
          <Card title="Datos del Servicio">
            <div className="flex flex-col items-center gap-2 p-4 lg:items-start lg:w-[1184px]">
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
                <div className="md:hidden xl:flex flex flex-row gap-2">
                  <SelectTime text="Control" />

                  <Select
                    text="Incidentes"
                    handleChange={handleIncidentChange}
                    list={INCIDENT_LIST}
                  />
                </div>
              </DataContent>

              <DataContent>
                <Input
                  name="Ubicación"
                  description="Ubicación del servicio"
                  className="w-[494px] lg:w-[524px]"
                />
                <Input name="Folio" className="w-32 lg:w-44" />

                <SelectTime text="Llegada" />

                <div
                  ref={animationParent}
                  className="md:hidden xl:flex flex flex-row gap-2"
                >
                  <SelectTime text="Base" />
                  {incidentType === 'Otro' && (
                    <Input name="Otro" className="w-44" />
                  )}
                </div>
              </DataContent>

              <div className="hidden md:block xl:hidden">
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
            </div>
          </Card>

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[870px,1fr] gap-3">
            <div ref={animationParent} className="flex flex-col gap-3">
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
                  <TextArea
                    name="Especifique"
                    type="EspecifiqueDañosMateriales"
                  />

                  <div className="w-[1.5px] h-32 mx-2 bg-gray-600 opacity-20"></div>

                  <div className="flex flex-col justify-between">
                    <Input name="Heridos" className="w-[170px]" />
                    <Input name="Muertos" className="w-[170px]" />
                  </div>

                  <TextArea
                    name="Parte Ambulancia"
                    type="DañosParteAmbulancia"
                  />
                </div>
              </Card>

              <Card title="Legales">
                <div className="flex flex-row justify-center lg:justify-normal lg:gap-6 gap-5 p-4 lg:w-[870px]">
                  <Select text="Materiales" list={DAÑOS_MATERIALES} />
                  <Input name="Otro" className="w-44" />
                </div>
              </Card>
            </div>

            <div className="flex flex-row lg:flex-col gap-3">
              <Card title="Personal">
                <div
                  className={`flex flex-row justify-center lg:justify-normal lg:gap-6 gap-5 p-4 ${
                    incidentType === 'Otro' ? 'lg:h-[325px]' : 'lg:h-[389px]'
                  }  w-[302px] transition-all`}
                >
                  <Select text="Materiales" list={DAÑOS_MATERIALES} />
                </div>
              </Card>

              <Card title="Obsevaciones">
                <div className="flex flex-row justify-normal p-4 h-40 w-[302px]">
                  <TextArea type="Observaciones" />
                </div>
              </Card>

              <div className="hidden lg:block">
                {incidentType !== 'Otro' && (
                  <ContentButtons incidentType={incidentType} />
                )}
              </div>
            </div>
          </div>

          <div className="lg:hidden block">
            <ContentButtons />
          </div>
          {incidentType === 'Otro' && (
            <ContentButtons incidentType={incidentType} />
          )}
        </form>
      </Container>
    </Layout>
  )
}
