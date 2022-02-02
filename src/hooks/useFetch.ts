import axios from 'redaxios'
import React from 'react'

export const useFetch = (url: string, id = '') => {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    const getUsersList = async (url: string) => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${url}`)

        setData(response)
        setIsError(false)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getUsersList()
  }, [url, id])
  return {
    data,
    isLoading,
    isError,
  }
}
