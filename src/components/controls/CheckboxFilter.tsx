interface Props {
  showAll: boolean
  setShowAll: (state: boolean) => void
}

export const CheckboxFilter = ({ showAll, setShowAll }: Props) => {
  const updateShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <label>
      <input type="checkbox" onChange={updateShowAll} checked={showAll} />
      Show all
    </label>
  )
}
