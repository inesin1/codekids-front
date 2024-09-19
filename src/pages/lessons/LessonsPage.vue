<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { columns } from './columns'
import { Lesson, LessonStatusTypes, PayStatusTypes } from '../../types/lesson'
import CreateLessonModal from './components/create-lesson-modal/CreateLessonModal.vue'
import { useApi } from '../../services/api'
import { createNotification } from '../../helpers/notifications'
import { formatDate } from '../../helpers/format-date'
import { useRouter } from 'vue-router'
import { Dayjs } from 'dayjs'

type Filter = {
  datetime: [Dayjs | null, Dayjs | null]
}

// Data
const router = useRouter()
const search = ref('')
const filter = reactive<Filter>({
  datetime: [null, null],
})
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
const createLessonModalVisible = ref(false)
const customRow = (record) => {
  return {
    onClick: () => {
      router.push({ name: 'LessonId', params: { id: record.id } })
    },
  }
}

// Получаем данные с бэка
const { getAllReactive, create } = useApi<Lesson>('lesson')
const { data, isFetching } = getAllReactive({
  search: search,
  with: ['teacher', 'student', 'course'],
})

// Methods
const saveLesson = async (lesson: Partial<Lesson>) => {
  try {
    await create(lesson)
    createNotification('success', 'Урок добавлен')
  } catch (e) {
    createNotification('error', e)
  }
}
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-button type="primary" @click="createLessonModalVisible = true">
        + Добавить
      </a-button>
      <a-range-picker
        v-model:value="filter.datetime"
        :format="dateFormatList"
      />
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
      :custom-row="customRow"
    >
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'id'">
          {{ record.id }}
        </template>
        <template v-if="column.key === 'datetime'">
          {{ formatDate(record.datetime) }}
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
          >
            {{ record.pay_status }}
          </a-tag>
        </template>
      </template>
    </a-table>
  </a-space>
  <create-lesson-modal
    v-model:visible="createLessonModalVisible"
    @save="saveLesson"
  />
</template>
