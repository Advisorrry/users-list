import React from 'react'
import { UserCard } from '../components/UserCard/UserCard'
import { URL } from '../constants'
import { useFetch } from '../hooks/useFetch'

export const HomePage: React.FC = () => {
    const {data, isLoading} = useFetch(URL)
    console.log(data[0].name);
    
  return (
    <>
      <h2>Список пользователей</h2>

      <div>
        {
           
        }
      </div>
    </>
  )
}
