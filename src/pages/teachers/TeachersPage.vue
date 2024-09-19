<script lang="ts" setup>
import { computed, ref } from 'vue'
import { columns } from './columns'
import CreateTeacherModal from './components/CreateTeacherModal.vue'
import { Teacher } from '../../types/teacher'
import { useApi } from '../../services/api'
import { createNotification } from '../../helpers/notifications'

// Data
const search = ref('')
const createTeacherModalVisible = ref(false)

// Получаем данные с бэка
const { getAllReactive, create } = useApi<Teacher>('teacher')
const { data, isFetching } = getAllReactive({
  search: search,
  with: ['courses'],
})

// Methods
const saveTeacher = async (teacher: Partial<Teacher>) => {
  try {
    await create(teacher)
    createNotification('success', 'Преподаватель добавлен')
  } catch (e) {
    createNotification('error', e)
  }
}
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-button type="primary" @click="createTeacherModalVisible = true">
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
      :loading="isFetching"
    >
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'id'">
          {{ record.id }}
        </template>
        <template v-if="column.key === 'name'">
          {{ record.name }}
        </template>
        <template v-if="column.key === 'courses'">
          <a-tag v-for="course in record.courses" :key="course.id">
            {{ course.name }}
          </a-tag>
        </template>
      </template>
    </a-table>
  </a-space>
  <create-teacher-modal
    v-model:visible="createTeacherModalVisible"
    @save="saveTeacher"
  />
</template>
