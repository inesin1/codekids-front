<script lang="ts" setup>
import { ref } from 'vue'
import { columns } from './columns'
import CreateTeacherModal from './components/CreateTeacherModal.vue'
import {data} from './data'

// Data
const loading = ref(false)

const createTeacherModalVisible = ref(false)
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-input-search placeholder="Поиск..." />
      <a-button type="primary" @click="createTeacherModalVisible = true">
        + Добавить
      </a-button>
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
        <template v-if="column.key === 'courses'">
          {{ record.courses }}
        </template>
      </template>
    </a-table>
  </a-space>
  <create-teacher-modal v-model:visible="createTeacherModalVisible" />
</template>
