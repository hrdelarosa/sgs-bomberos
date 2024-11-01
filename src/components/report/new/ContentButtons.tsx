import { DocumentClearIcon, FolderSaveIcon } from '../../Icons'
import Button from '../../UI/Button'

interface Props {
  incidentType?: string
}

export default function ContentButtons({ incidentType }: Props) {
  return (
    <>
      {incidentType ? (
        <div
          className={`flex flex-row items-center justify-center gap-4 ${
            incidentType === 'Otro' ? 'h-11' : 'h-36 w-[302px]'
          }`}
        >
          <Button>
            <FolderSaveIcon />
            Guardar
          </Button>

          <Button>
            <DocumentClearIcon />
            Limpiar
          </Button>
        </div>
      ) : (
        <div className={`flex flex-row items-center justify-center gap-4 h-11`}>
          <Button>
            <FolderSaveIcon />
            Guardar
          </Button>

          <Button>
            <DocumentClearIcon />
            Limpiar
          </Button>
        </div>
      )}
    </>
    // <div
    //   className={`flex flex-row items-center justify-center gap-4 ${
    //     incidentType === 'Otro' ? 'h-11' : 'h-36 w-[302px]'
    //   }`}
    // >
    //   <Button>
    //     <FolderSaveIcon />
    //     Guardar
    //   </Button>

    //   <Button>
    //     <DocumentClearIcon />
    //     Limpiar
    //   </Button>
    // </div>
  )
}
