<script lang="ts" setup>
import { columns } from './columns'
import { useApi } from '../../services/api'
import { Lesson } from '../../types/lesson'
import { LessonStatusTypes, PayStatusTypes } from '../../types/lesson'
import { ref, computed, reactive } from 'vue'

// Data
const { getAll } = useApi<Lesson>('lesson')
const lessons = ref<Lesson[]>(null)
const isLoading = ref<boolean>(false)

const filter = reactive({
  status: null,
})

// Methods
const generateReport = async () => {
  isLoading.value = true
  lessons.value = await getAll({ with: ['teacher', 'student', 'course'] })
  lessons.value.filter((lesson) =>
    filter.status ? lesson.status === filter.status : true
  )
  isLoading.value = false
}
</script>

<template>
  <a-space direction="vertical">
    <a-space direction="vertical">
      <a-button type="primary" @click="generateReport"> Сформировать </a-button>
      <a-form>
        <a-form-item label="Статус проведения">
          <a-select v-model:value="filter.status" placeholder="Не выбран">
            <a-select-option
              v-for="lessonStatusType in LessonStatusTypes"
              :value="lessonStatusType"
            >
              {{ lessonStatusType }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-space>
    <a-table
      style="border: 1px solid #f0f0f0; border-bottom: none; border-radius: 2px"
      :columns="columns"
      :data-source="lessons"
      :loading="isLoading"
      :pagination="false"
    >
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'id'">
          {{ record.id }}
        </template>
        <template v-if="column.key === 'datetime'">
          {{ record.datetime }}
        </template>
        <template v-if="column.key === 'student'">
          <a-typography-link>
            {{ record.student.name }}
          </a-typography-link>
        </template>
        <template v-if="column.key === 'teacher'">
          <a-typography-link>
            {{ record.teacher.name }}
          </a-typography-link>
        </template>
        <template v-if="column.key === 'course'">
          <a-tag>{{ record.course.name }}</a-tag>
        </template>
        <template v-if="column.key === 'status'">
          <a-tag
            v-if="record.status === LessonStatusTypes.Canceled"
            color="red"
          >
            {{ record.status }}
          </a-tag>
          <a-tag
            v-else-if="record.status === LessonStatusTypes.Assigned"
            color="yellow"
          >
            {{ record.status }}
          </a-tag>
          <a-tag
            v-else-if="record.status === LessonStatusTypes.Completed"
            color="green"
          >
            {{ record.status }}
          </a-tag>
          <a-tag
            v-else-if="record.status === LessonStatusTypes.Rescheduled"
            color="orange"
          >
            {{ record.status }}
          </a-tag>
        </template>
        <template v-if="column.key === 'pay_status'">
          <a-tag v-if="record.pay_status === PayStatusTypes.Paid" color="green">
            {{ record.pay_status }}
          </a-tag>
          <a-tag
            v-else-if="record.pay_status === PayStatusTypes.NotPaid"
            color="red"
            >{{ record.pay_status }}
          </a-tag>
        </template>
      </template>
      <template #summary>
        <a-table-summary fixed>
          <a-table-summary-row>
            <a-table-summary-cell :index="0">Итого уроков</a-table-summary-cell>
            <a-table-summary-cell :index="1" v-if="lessons">
              {{ lessons.length }}
            </a-table-summary-cell>
          </a-table-summary-row>
        </a-table-summary>
      </template>
    </a-table>
  </a-space>
</template>
