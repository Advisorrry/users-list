import React from 'react'
import s from './UserCard.module.scss'

interface UserCardProps {
  name?: string
  city?: string
  company?: string
}

export const UserCard: React.FC<UserCardProps> = ({ name, city, company }) => {
  return (
    <div className={s.userCard}>
      <div className={s.name}>{`name`}</div>
      <div className={s.position}>{`city`}</div>
      <div className={s.position}>{`company`}</div>
      <a href="3" className={s.action}>
        <span>Подробнее...</span>
      </a>
    </div>
  )
}
