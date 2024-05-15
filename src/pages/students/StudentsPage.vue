<script lang="ts" setup>
import { computed, ref } from 'vue'
import { columns } from './columns'
import CreateStudentModal from './components/CreateStudentModal.vue'
import {data} from './data'


// Data
const loading = ref(false)
const search = ref('')
const createStudentModalVisible = ref(false)
const filteredData = computed(() => {
  return data.filter(student => 
    student.name.toLowerCase().includes(search.value.toLowerCase()) ||
    student.teacher.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
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
      :data-source="filteredData"
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
          {{ record.birthday }}
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
  <create-student-modal v-model:visible="createStudentModalVisible" />
</template>
