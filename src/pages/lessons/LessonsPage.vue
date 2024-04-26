<script lang="ts" setup>
import { ref } from 'vue'
import { columns } from './columns'
import dayjs from 'dayjs'
import { CourseTypes } from '../../types/course-types'
import { LessonStatusTypes, PayStatusTypes } from '../../types/lesson'

// Data
const loading = ref(false)
const data = [
  {
    id: 1,
    datetime: dayjs(),
    student: { id: 1, name: 'Артём' },
    teacher: { id: 1, name: 'Валерия' },
    course: CourseTypes.GameMakerStudio,
    status: LessonStatusTypes.Assigned,
    pay_status: PayStatusTypes.NotPaid,
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
        <template v-if="column.key === 'datetime'">
          {{ record.datetime }}
        </template>
        <template v-if="column.key === 'student'">
          <a-button>{{ record.student.name }}</a-button>
        </template>
        <template v-if="column.key === 'teacher'">
          {{ record.teacher.name }}
        </template>
        <template v-if="column.key === 'course'">
          {{ record.course }}
        </template>
        <template v-if="column.key === 'status'">
          {{ record.status }}
        </template>
        <template v-if="column.key === 'pay_status'">
          {{ record.pay_status }}
        </template>
      </template>
    </a-table>
  </a-space>
</template>
