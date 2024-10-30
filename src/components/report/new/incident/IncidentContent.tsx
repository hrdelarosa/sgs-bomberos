import Card from '../Card'
import Select from '../Select'
import TextArea from '../TextArea'
import {
  INCENDIO_INMUEBLES,
  INCENDIO_OTROS,
  FUGA_DERRAME,
  RESCATE_EQUIPO,
  ABEJAS,
} from '../../../../constants/incidentList'
import Input from '../datos/Input'

interface Props {
  incidentType: string
}

export default function IncidentContent({ incidentType }: Props) {
  return (
    <>
      {incidentType === 'Incendio' && (
        <Card title="Incendio">
          <div className="flex flex-row justify-center lg:justify-normal lg:gap-6 gap-5 p-4 lg:w-[870px]">
            <Select text="Inmuebles" list={INCENDIO_INMUEBLES} />
            <TextArea name="Especifique" type="EspecifiqueIncendioInmuebles" />

            <div className="w-[1.5px] h-32 mx-2 bg-gray-600 opacity-20"></div>

            <Select text="Otros" list={INCENDIO_OTROS} />
            <TextArea name="Especifique" type="EspecifiqueIncendioOtros" />
          </div>
        </Card>
      )}
      {incidentType === 'Fuga o derrame' && (
        <Card title="Fuga/Derrame">
          <div className="flex flex-row justify-center lg:justify-normal lg:gap-6 gap-5 p-4 lg:w-[870px]">
            <div className="flex flex-col justify-between">
              <Select text="Fuga o derrame" list={FUGA_DERRAME} />
              <Input name="Capacidad" className="w-[170px]" />
            </div>

            <TextArea name="Especifique" type="EspecifiqueFugaDerrame" />

            <div className="flex flex-col justify-between">
              <Input name="Empresa" className="w-[180px]" />
              <Input name="No. de Guia" className="w-[180px]" />
            </div>

            <div className="flex flex-col justify-between">
              <Input name="Material" className="w-[200px]" />
              <Input name="Observaciones" className="w-[200px]" />
            </div>
          </div>
        </Card>
      )}
      {incidentType === 'Rescate' && (
        <Card title="Rescate">
          <div className="flex flex-row justify-center lg:justify-normal lg:gap-6 gap-5 p-4 lg:w-[870px]">
            <div className="flex flex-col justify-between">
              <Input name="Heridos" className="w-[170px]" />
              <Input name="Muertos" className="w-[170px]" />
            </div>

            <TextArea name="Parte Ambulancia" type="RescateParteAmbulancia" />

            <div className="w-[1.5px] h-32 mx-2 bg-gray-600 opacity-20"></div>

            <div className="flex flex-col justify-between">
              <Select text="Materiales" list={RESCATE_EQUIPO} />
              <Input name="No. Personal" className="w-[170px]" />
            </div>
            <TextArea name="Especifique" type="EspecifiqueMateriales" />
          </div>
        </Card>
      )}
      {incidentType === 'Abejas' && (
        <Card title="Abejas">
          <div className="flex flex-row justify-center lg:justify-normal lg:gap-6 gap-5 p-4 lg:w-[870px]">
            <Select text="Materiales" list={ABEJAS} />
            <TextArea name="Especifique" type="EspecifiqueAbejas" />
            <TextArea name="Observaciones" type="ObservacionesAbejas" />
          </div>
        </Card>
      )}
    </>
  )
}
