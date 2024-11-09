import { defineStore } from 'pinia';
import { User } from '../types/user';
import { computed, ref } from 'vue';
import { useAuthApi } from '../services/auth-api';
import { createNotification } from '../helpers/notifications';
import { jwtDecode } from 'jwt-decode';
import { AuthData } from '../types/auth';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
  const router = useRouter();
  const currentUser = ref<User | null>(null);
  const accessToken = ref<string | null>(null);
  const isAuthenticated = computed(() => !!accessToken.value);

  async function login(authData: AuthData) {
    try {
      const { login } = useAuthApi();
      const { data, status, statusText } = await login(authData);

      if (status !== 200) {
        throw new Error(statusText);
      }

      if (!data.success) {
        createNotification('error', 'Неверный логин или пароль');
        return false;
      }

      accessToken.value = data.access_token;
      console.log(accessToken.value);

      const payload = jwtDecode<User>(data.access_token);
      currentUser.value = payload;

      return true;
    } catch (error) {
      if (error instanceof Error) {
        createNotification('error', `Произошла ошибка: ${error.message}`);
      }
      return false;
    }
  }

  async function logout() {
    currentUser.value = null;
    accessToken.value = null;
    router.push('/login');
  }

  return {
    currentUser,
    isAuthenticated,
    accessToken,
    login,
    logout,
  };
});
