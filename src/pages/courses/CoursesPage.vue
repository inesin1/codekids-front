<script lang="ts" setup>
import { computed, ref } from 'vue'
import { columns } from './columns'
import { createNotification } from '../../helpers/notifications'
import { useApi } from '../../services/api'
import { Course } from '../../types/course'
import CreateCourseModal from './components/CreateCourseModal.vue'

// Data
const search = ref('')
const createCourseModalVisible = ref(false)

// Получаем данные с бэка
const { getAllReactive, create } = useApi<Course>('course')
const { data, isFetching } = getAllReactive({ search: search.value })

// Methods
const saveCourse = async (course: Partial<Course>) => {
  try {
    await create(course)
    createNotification('success', 'Курс добавлен')
  } catch (e) {
    createNotification('error', e)
  }
}
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-button type="primary" @click="createCourseModalVisible = true">
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
      </template>
    </a-table>
  </a-space>
  <create-course-modal
    v-model:visible="createCourseModalVisible"
    @save="saveCourse"
  />
</template>
