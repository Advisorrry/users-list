import React from 'react'
import { Button } from '../components/Button/Button'
import s from './MainLayout.module.scss'

interface MainLayoutProps {
  children?: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className={s.sidebar}>
        <Button>По городу</Button>
        <Button>По компании</Button>
      </div>
      <div className={s.wrapper}>
        <div>{children}</div>
      </div>
    </>
  )
}
