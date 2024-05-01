<script lang="ts" setup>
import { ref } from 'vue'
import { columns } from './columns'
import dayjs from 'dayjs'
import { CourseTypes } from '../../types/course-types'

// Data
const loading = ref(false)
const data = [
  {
    id: 1,
    name: 'Артём',
    birthday: dayjs(),
    age: 15,
    teacher: { id: 1, name: 'Валерия' },
    courses: [CourseTypes.GameMakerStudio],
  },
]
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-input-search placeholder="Поиск..." />
      <a-button type="primary">+ Добавить</a-button>
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
      :loading="loading"
    >
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'id'">
          {{ record.id }}
        </template>
        <template v-if="column.key === 'name'">
          {{ record.name }}
        </template>
        <template v-if="column.key === 'birthday'">
          {{ record.bithday }}
        </template>
        <template v-if="column.key === 'age'">
          {{ record.age }}
        </template>
        <template v-if="column.key === 'teacher'">
          {{ record.teacher.name }}
        </template>
        <template v-if="column.key === 'courses'">
          {{ record.courses }}
        </template>
      </template>
    </a-table>
  </a-space>
</template>
