import Card from '../Card'
import Select from '../Select'
import TextArea from '../TextArea'
import {
  INCENDIO_INMUEBLES,
  INCENDIO_OTROS,
  FUGA_DERRAME,
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

            <div className="w-[1.5px] h-32 bg-gray-600 opacity-20"></div>

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

            <Input name="Empresa" className="w-[170px]" />

            {/* <div className="w-[1.5px] h-32 bg-gray-600 opacity-20"></div> */}
          </div>
        </Card>
      )}
    </>
  )
}
