<script setup lang="ts">
import { User } from '@/types/user'
import { useApi } from '../../services/api'
import { useRoute } from 'vue-router'
import { RoleTypes } from '@/types/user'
import { onMounted, ref } from 'vue'
import { rules } from './components/create-user-modal/validation-rules'

// Data
const route = useRoute()
const id = +route.params.id

const { getOne } = useApi<User>('user')
const user = ref<User>(null)

onMounted(async () => {
  user.value = await getOne(id)
})
</script>

<template>
  <a-skeleton v-if="!user" active />
  <div v-else>
    <a-form
      :disabled="true"
      ref="formRef"
      :model="user"
      layout="vertical"
      :rules="rules"
    >
      <a-form-item label="Имя" name="name">
        <a-input v-model:value="user.name" />
      </a-form-item>
      <a-form-item label="Логин" name="username">
        <a-input v-model:value="user.username" />
      </a-form-item>
      <a-form-item label="Роль" name="role">
        <a-select v-model:value="user.role">
          <a-select-option
            v-for="roleType in RoleTypes"
            :key="roleType"
            :value="roleType"
          >
            {{ roleType }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </div>
</template>
