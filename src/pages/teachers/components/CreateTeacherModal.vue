<script lang="ts" setup>
import { reactive } from 'vue';
import { Lesson } from '../../../types/lesson';
import { Course } from '../../../types/course';
import { useApi } from '../../../services/api'

const createTeacher = () => {}
const emit = defineEmits<{
  save: [lesson: Partial<Lesson>]
}>()

const visible = defineModel<boolean>('visible')
const formState = reactive<Partial<Lesson>>({})

const { getAll: getCourses } = useApi<Course>('course')
const { data: courses } = getCourses()
</script>

<template>
  <a-modal
    :open="visible"
    title="Добавление преподавателя"
    okText="Добавить"
    @ok="createTeacher"
    @cancel="visible = false"
    :width="800"
  >
    <a-form>
      <a-form-item label="ФИО">
        <a-input placeholder="..." />
      </a-form-item>
      <a-form-item label="Преподаваемые курсы">
        <a-select
          v-model:value="formState.course.id"
          placeholder="Выбрать..."
          :options="courses"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
