<script lang="ts" setup>
import { reactive } from 'vue'
import { Lesson } from '../../../types/lesson'
import { CourseTypes } from '../../../types/course-types'
import { useApi } from '../../../services/api'
import { Student } from '../../../types/student'
import { Teacher } from '../../../types/teacher'

const emit = defineEmits<{
  save: [lesson: Partial<Lesson>]
}>()

const visible = defineModel<boolean>('visible')
const formState = reactive<Partial<Lesson>>({})

const { getAll: getStudents } = useApi<Student>('student')
const { getAll: getTeachers } = useApi<Teacher>('teacher')
const { data: students } = getStudents()
const { data: teachers } = getTeachers()
</script>

<template>
  <a-modal
    :open="visible"
    title="Добавление урока"
    okText="Добавить"
    @ok="$emit('save', formState)"
    @cancel="visible = false"
    :width="800"
  >
    <a-form>
      <a-form-item label="Дата и время">
        <a-date-picker show-time v-model:value="formState.datetime" />
      </a-form-item>
      <a-form-item label="Ученик">
        <a-select
          v-model:value="formState.student.id"
          placeholder="Выбрать..."
          :options="students"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
      <a-form-item label="Преподаватель">
        <a-select
          v-model:value="formState.teacher.id"
          placeholder="Выбрать..."
          :options="teachers"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
      <a-form-item label="Курс">
        <a-select placeholder="Выбрать..." v-model:value="formState.course">
          <a-select-option
            v-for="courseType in CourseTypes"
            :value="courseType"
          >
            {{ courseType }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
