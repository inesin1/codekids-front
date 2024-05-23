import { defineStore } from 'pinia'
import { User } from '../types/user'
import { ref } from 'vue'
import { useAuthApi } from '../services/auth-api'
import { createNotification } from '../helpers/notifications'
import { jwtDecode } from 'jwt-decode'
import { AuthData } from '../types/auth'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  const currentUser = ref<User | null>(null)
  const accessToken = ref<string | null>(null)

  async function login(authData: AuthData) {
    const { login } = useAuthApi()
    try {
      const { data, status, statusText } = await login(authData)

      if (status !== 200) {
        throw new Error(statusText)
      }

      accessToken.value = data.access_token

      const payload = jwtDecode<User>(data.access_token)
      currentUser.value = payload
    } catch (error) {
      if (error instanceof Error) {
        createNotification('error', `Ошибка авторизации: ${error.message}`)
      }
      return false
    }

    return true
  }

  async function logout() {
    currentUser.value = null
    accessToken.value = null
    router.push('/login')
  }

  return {
    currentUser,
    accessToken,
    login,
    logout,
  }
})
