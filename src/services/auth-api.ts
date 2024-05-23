import { AuthData, Token } from '../types/auth'
import { useAxiosInstance } from './instance'

export const useAuthApi = () => {
  const { instance } = useAxiosInstance()

  const login = (authData: AuthData) =>
    instance.post<Token>('auth/login', authData)

  return { login }
}
