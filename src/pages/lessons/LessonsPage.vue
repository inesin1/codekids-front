<script lang="ts" setup>
import { computed, ref } from 'vue'
import { columns } from './columns'
import { LessonStatusTypes, PayStatusTypes } from '../../types/lesson'
import CreateLessonModal from './components/CreateLessonModal.vue'
import {data} from './data'
// Data
const loading = ref(false)
const search = ref('')
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const createLessonModalVisible = ref(false)
const filteredData = computed(() => {
  return data.filter(lesson => 
    lesson.student.name.toLowerCase().includes(search.value.toLowerCase()) ||
    lesson.teacher.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-button type="primary" @click="createLessonModalVisible = true">
        + Добавить
      </a-button>
      <a-range-picker :format="dateFormatList"/>
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
      :data-source="filteredData"
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
          <a-tag 
            v-if="record.pay_status === PayStatusTypes.Paid" 
            color="green"
          >
          {{ record.pay_status }}
        </a-tag>
        <a-tag 
            v-else-if="record.pay_status === PayStatusTypes.NotPaid" 
            color="red"
          >{{ record.pay_status }}
        </a-tag>
        </template>
      </template>
    </a-table>
  </a-space>
  <create-lesson-modal v-model:visible="createLessonModalVisible" />
</template>
