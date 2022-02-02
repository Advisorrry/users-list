import React from 'react'
import s from "./Button.module.scss"

interface ButtonProps {
  children: React.ReactNode
}

export const Button = React.memo(({ children }: ButtonProps) => {
  return (
    <button className={s.button}>
      {children}
    </button>
  )
})