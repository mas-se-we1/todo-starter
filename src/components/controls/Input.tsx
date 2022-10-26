import './Input.css'

interface Props {
  input: string
  setInput: (text: string) => void
}

export const Input = ({ input, setInput }: Props) => {
  let inputClassName = 'input'
  if (input) {
    inputClassName += ' green'
  } else {
    inputClassName += ' red'
  }

  return (
    <input
      className={inputClassName}
      value={input}
      onChange={e => {
        setInput(e.target.value)
      }}
    />
  )
}
