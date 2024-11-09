import { defineStore } from 'pinia';
import { User } from '../types/user';
import { computed, ref } from 'vue';
import { useAuthApi } from '../services/auth-api';
import { createNotification } from '../helpers/notifications';
import { jwtDecode } from 'jwt-decode';
import { AuthData, JwtExpData } from '../types/auth';
import { useRouter } from 'vue-router';

export const useUserStore = defineStore('user', () => {
  const router = useRouter();
  const currentUser = ref<User | null>(null);
  const accessToken = ref<string | null>(null);
  const isAuthenticated = computed(() => !!accessToken.value);

  // Ищет токен в памяти браузера и проверяет его, если найден
  const checkAccessToken = () => {
    const token = localStorage.getItem('access_token');
    if (!token) return;

    const { iat, exp, ...userData } = jwtDecode<User & JwtExpData>(token);
    const isExpired = Date.now() >= exp * 1000;

    if (isExpired) return;

    accessToken.value = token;
    currentUser.value = userData;
  };

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
      localStorage.setItem('access_token', data.access_token);

      const { iat, exp, ...userData } = jwtDecode<User & JwtExpData>(
        data.access_token,
      );

      currentUser.value = userData;

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

  checkAccessToken();

  return {
    currentUser,
    isAuthenticated,
    accessToken,
    login,
    logout,
  };
});
