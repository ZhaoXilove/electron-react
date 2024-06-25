import axiosInstance from '../base'
import { useQuery } from '@tanstack/react-query'

const useGetList = (url: string) => {
  const fetchData = async () => {
    const response = await axiosInstance.get(url)
    return response.data
  }

  return useQuery({ queryKey: ['todos'], queryFn: fetchData })
}

export { useGetList }
