<script lang="ts" setup>
import { computed, ref } from 'vue'
import { columns } from './columns'
import CreateTeacherModal from './components/CreateTeacherModal.vue'
import {data} from './data'
import { Teacher } from '../../types/teacher';

// Data
const loading = ref(false)
const search = ref('')
const createTeacherModalVisible = ref(false)
const filteredData = computed(() => {
  return data.filter(teacher => 
    teacher.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
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
        <template v-if="column.key === 'courses'">
          {{ record.courses }}
        </template>
      </template>
    </a-table>
  </a-space>
  <create-teacher-modal v-model:visible="createTeacherModalVisible" />
</template>
