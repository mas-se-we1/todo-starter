import { ReactNode } from 'react'
import './Button.css'

type ButtonType = 'add' | 'remove' | 'up' | 'down'

interface Props {
  onClick: () => void
  buttonType: ButtonType
  children: ReactNode
}

export const Button = ({ onClick, buttonType, children }: Props) => {
  return (
    <button className={`button ${buttonType}`} onClick={onClick}>
      {children}
    </button>
  )
}
