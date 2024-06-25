import { axiosInstance as base } from '../base'
import { useQuery } from '@tanstack/react-query'

const useGetList = () => {
  const fetchData = async () => {
    const response = await base.get('/api/mock')
    return response.data
  }

  return useQuery({ queryKey: ['todos'], queryFn: fetchData })
}

export { useGetList }
