<script lang="ts" setup>
import { useUserStore } from '../../stores/user.store'
import { ref } from 'vue'
import { AuthData } from '../../types/auth'
import { useRouter } from 'vue-router'

// Data
const router = useRouter()
const { login } = useUserStore()
const formState = ref<AuthData>({
  username: '',
  password: '',
})

// Methods
const onFinish = async (values: AuthData) => {
  const success = await login(values)
  if (success) {
    await router.push('/lessons')
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<template>
  <div
    class="flex flex-col h-screen justify-center items-center dark:bg-neutral-800"
  >
    <a-card class="w-[450px]">
      <div class="mb-5 w-full text-center">
        <div class="flex items-center justify-center">
          <div class="icon-[ph--CodeKids-duotone] text-3xl text-sky-600" />
          <div
            class="ml-1 text-2xl font-black text-neutral-600 dark:text-neutral-200"
          >
            <span class="text-[#4B5BEC]">Code</span>Kids
          </div>
        </div>
      </div>
      <a-form
        :model="formState"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
        @finish-failed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Введите ваш логин!' }]"
        >
          <a-input v-model:value="formState.username" placeholder="Логин" />
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Введите ваш пароль!' }]"
        >
          <a-input-password
            v-model:value="formState.password"
            placeholder="Пароль"
          />
        </a-form-item>

        <a-form-item>
          <div class="m-auto w-60">
            <a-button type="primary" block html-type="submit">Войти</a-button>
          </div>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
