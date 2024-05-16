<script lang="ts" setup>
import { reactive } from 'vue'
import { Lesson } from '../../../types/lesson'
import { Course } from '../../../types/course'
import { useApi } from '../../../services/api'
import { Teacher } from '../../../types/teacher'


const createStudent = () => {}
const emit = defineEmits<{
  save: [lesson: Partial<Lesson>]
}>()

const visible = defineModel<boolean>('visible')
const formState = reactive<Partial<Lesson>>({})

const { getAll: getTeachers } = useApi<Teacher>('teacher')
const { getAll: getCourses } = useApi<Course>('course')
const { data: teachers } = getTeachers()
const { data: courses } = getCourses()
</script>

<template>
  <a-modal
    :open="visible"
    title="Добавление ученика"
    okText="Добавить"
    @ok="createStudent"
    @cancel="visible = false"
    :width="800"
  >
    <a-form>
      <a-form-item label="ФИО">
        <a-input placeholder=" " />
      </a-form-item>
      <a-form-item label="Дата рождения">
        <a-date-picker v-model:value="formState.datetime"/>
      </a-form-item>
      <a-form-item label="Возраст">
        <a-input placeholder=" " />
      </a-form-item>
      <a-form-item label="Курс">
        <a-select
          v-model:value="formState.course.id"
          placeholder="Выбрать..."
          :options="courses"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
      <a-form-item label="Преодаватель">
        <a-select 
          v-model:value="formState.teacher"
          placeholder="Выбрать..."
          :options="teachers"
          :field-names="{label: 'name', value: 'id'}"
          />
      </a-form-item>
      <a-form-item label="Контактные данные">
        <a-input placeholder="Выбрать..." />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
