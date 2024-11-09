import { AuthData, SignInReturnType } from '../types/auth'
import { useAxiosInstance } from './instance'

export const useAuthApi = () => {
  const { instance } = useAxiosInstance()

  const login = (authData: AuthData) =>
    instance.post<SignInReturnType>('auth/login', authData)

  return { login }
}
