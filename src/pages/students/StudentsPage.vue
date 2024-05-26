<script lang="ts" setup>
import { ref, watch } from 'vue'
import { columns } from './columns'
import CreateStudentModal from './components/CreateStudentModal.vue'
import { createNotification } from '../../helpers/notifications'
import { Student } from '../../types/student'
import { useApi } from '../../services/api'

// Data
const search = ref('')
const createStudentModalVisible = ref(false)

// Получаем данные с бэка
const { getAllReactive, create } = useApi<Student>('student')
const { data, isLoading } = getAllReactive({
  search: search,
  with: ['course', 'teacher'],
})

// Methods
const saveStudent = async (student: Partial<Student>) => {
  try {
    await create(student)
    createNotification('success', 'Ученик добавлен')
  } catch (e) {
    createNotification('error', e)
  }
}
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-button type="primary" @click="createStudentModalVisible = true">
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
        <template v-if="column.key === 'birthday'">
          {{ record.birthday }}
        </template>
        <template v-if="column.key === 'age'">
          {{ record.age }}
        </template>
        <template v-if="column.key === 'teacher'">
          {{ record.teacher.name }}
        </template>
        <template v-if="column.key === 'course'">
          <a-tag>{{ record.course.name }}</a-tag>
        </template>
      </template>
    </a-table>
  </a-space>
  <create-student-modal
    v-model:visible="createStudentModalVisible"
    @save="saveStudent"
  />
</template>
