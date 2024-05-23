import axios from 'axios'
import { useUserStore } from '../stores/user.store'

export const useAxiosInstance = () => {
  const { accessToken } = useUserStore()
  const authorizationHeader = accessToken ? `Bearer ${accessToken}` : undefined

  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api',
    headers: {
      Authorization: authorizationHeader,
    },
  })

  return { instance }
}
