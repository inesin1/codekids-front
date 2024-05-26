<script lang="ts" setup>
import { reactive } from 'vue'
import { Lesson } from '../../../types/lesson'
import { Course } from '../../../types/course'
import { useApi } from '../../../services/api'
import { Student } from '../../../types/student'
import { Teacher } from '../../../types/teacher'

const emit = defineEmits<{
  save: [lesson: Partial<Lesson>]
}>()

const visible = defineModel<boolean>('visible')
const formState = reactive<
  Partial<Lesson> & {
    teacher_id?: number
    student_id?: number
    course_id?: number
  }
>({})

const { getAllReactive: getStudents } = useApi<Student>('student')
const { getAllReactive: getTeachers } = useApi<Teacher>('teacher')
const { getAllReactive: getCourses } = useApi<Course>('course')
const { data: students } = getStudents()
const { data: teachers } = getTeachers()
const { data: courses } = getCourses()

// Methods
const onOk = () => {
  emit('save', formState)
  visible.value = false
}
</script>

<template>
  <a-modal
    :open="visible"
    title="Добавление урока"
    okText="Добавить"
    @ok="onOk"
    @cancel="visible = false"
    :width="800"
  >
    <a-form>
      <a-form-item label="Дата и время">
        <a-date-picker show-time v-model:value="formState.datetime" />
      </a-form-item>
      <a-form-item label="Ученик">
        <a-select
          v-model:value="formState.student_id"
          placeholder="Выбрать..."
          :options="students"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
      <a-form-item label="Преподаватель">
        <a-select
          v-model:value="formState.teacher_id"
          placeholder="Выбрать..."
          :options="teachers"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
      <a-form-item label="Курс">
        <a-select
          v-model:value="formState.course_id"
          placeholder="Выбрать..."
          :options="courses"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
