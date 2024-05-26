<script lang="ts" setup>
import { reactive } from 'vue'
import { Course } from '../../../types/course'
import { useApi } from '../../../services/api'
import { Teacher } from '../../../types/teacher'

const emit = defineEmits<{
  save: [teacher: Partial<Teacher>]
}>()

const visible = defineModel<boolean>('visible')
const formState = reactive<Partial<Teacher> & { courses_ids?: number[] }>({})

const { getAllReactive: getCourses } = useApi<Course>('course')
const { data: courses } = getCourses()
</script>

<template>
  <a-modal
    :open="visible"
    title="Добавление преподавателя"
    okText="Добавить"
    @ok="$emit('save', formState)"
    @cancel="visible = false"
    :width="800"
  >
    <a-form>
      <a-form-item label="ФИО">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="Преподаваемые курсы">
        <a-select
          v-model:value="formState.courses_ids"
          mode="multiple"
          placeholder="Выбрать..."
          :options="courses"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
