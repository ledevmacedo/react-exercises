// Exemplo: object props vs individual props

// type apenas para literal unions
type ButtonVariant = "warning" | "danger" | "info" | "success"

// 1) Individual props (props soltas)
interface ButtonIndividualProps {
  label: string
  variant: ButtonVariant
  disabled?: boolean
}

function ButtonIndividual({ label, variant, disabled }: ButtonIndividualProps) {
  return <button disabled={disabled}>{label} - {variant}</button>
}

// 2) Object props (um unico objeto agrupando dados)
interface TripObjectProps {
  trip: {
    id: string
    origin: string
    destination: string
  }
  selected: boolean
  onSelect: (id: string) => void
}

function TripRowObject({ trip, selected, onSelect }: TripObjectProps) {
  return (
    <div onClick={() => onSelect(trip.id)}>
      {trip.origin} -> {trip.destination} {selected ? "(selecionado)" : ""}
    </div>
  )
}

// Regra pratica:
// - Use individual props quando sao poucos e independentes.
// - Use object props quando os dados formam um "grupo" (ex.: uma Trip).