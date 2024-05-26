<script lang="ts" setup>
import { ref } from 'vue'
import { columns } from './columns'
import { useApi } from '../../services/api'
import { createNotification } from '../../helpers/notifications'
import { User } from '../../types/user'
import CreateUserModal from './components/create-user-modal/CreateUserModal.vue'

// Data
const search = ref('')
const createUserModalVisible = ref(false)

// Получаем данные с бэка
const { getAllReactive, create } = useApi<User>('user')
const { data, isLoading } = getAllReactive({
  search,
})

// Methods
const save = async (user: Partial<User>) => {
  try {
    await create(user)
    createNotification('success', 'Пользователь добавлен')
  } catch (e) {
    createNotification('error', e)
  }
}
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-button type="primary" @click="createUserModalVisible = true">
        + Добавить
      </a-button>
      <a-input-search v-model:value="search" placeholder="Поиск..." />
    </a-space>
    <a-table
      style="
        border: 1px solid #f0f0f0;
        border-bottom: none;
        border-radius: 2px;
        cursor: pointer;
      "
      :columns="columns"
      :data-source="data"
      :loading="isLoading"
    >
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'id'">
          {{ record.id }}
        </template>
        <template v-if="column.key === 'name'">
          {{ record.name }}
        </template>
        <template v-if="column.key === 'username'">
          {{ record.username }}
        </template>
        <template v-if="column.key === 'role'">
          {{ record.role }}
        </template>
        <template v-if="column.key === 'is_active'">
          <a-tag :color="record.is_active ? 'green' : 'red'">
            {{ record.is_active ? 'Активен' : 'Не активен' }}
          </a-tag>
        </template>
      </template>
    </a-table>
  </a-space>
  <create-user-modal v-model:visible="createUserModalVisible" @save="save" />
</template>
