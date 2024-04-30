<script lang="ts" setup>
import { ref } from 'vue'
import { CourseTypes } from '../../types/course-types';
import  string from 'string'


// Data
const loading = ref(false)
const data = [
  {
    id: 1,
    name: string("Валерия"),
    course: CourseTypes.GameMakerStudio,
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
        <template v-if="column.key === 'course'">
          {{ record.course }}
        </template>
      </template>
    </a-table>
  </a-space>
</template>