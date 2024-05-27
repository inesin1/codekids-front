<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { RoleTypes, User } from '@/types/user'
import { rules } from './validation-rules'
import { FormInstance } from 'ant-design-vue'

const emit = defineEmits<{
  save: [user: Partial<User>]
}>()

const visible = defineModel<boolean>('visible')
const formState = reactive<Partial<User>>({})
const formRef = ref<FormInstance>()

// Methods
const onOk = async () => {
  await formRef.value.validate()
  emit('save', formState)
  visible.value = false
}
</script>

<template>
  <a-modal
    :open="visible"
    title="Добавление пользователя"
    okText="Добавить"
    @ok="onOk"
    @cancel="visible = false"
  >
    <a-form ref="formRef" :model="formState" layout="vertical" :rules="rules">
      <a-form-item label="Имя" name="name">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="Логин" name="username">
        <a-input v-model:value="formState.username" />
      </a-form-item>
      <a-form-item label="Пароль" name="password">
        <a-input v-model:value="formState.password" />
      </a-form-item>
      <a-form-item label="Роль" name="role">
        <a-select v-model:value="formState.role">
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
  </a-modal>
</template>
