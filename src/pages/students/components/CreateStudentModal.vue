<script lang="ts" setup>
import { reactive } from 'vue'
import { Lesson } from '../../../types/lesson'
import { Course } from '../../../types/course'
import { useApi } from '../../../services/api'
import { Teacher } from '../../../types/teacher'
import { Student } from '../../../types/student'

const emit = defineEmits<{
  save: [student: Partial<Student>]
}>()

// Data
const visible = defineModel<boolean>('visible')
const formState = reactive<
  Partial<Student> & { course_id?: number; teacher_id?: number }
>({})

// Api
const { getAllReactive: getTeachers } = useApi<Teacher>('teacher')
const { getAllReactive: getCourses } = useApi<Course>('course')
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
    title="Добавление ученика"
    okText="Добавить"
    @ok="onOk"
    @cancel="visible = false"
    :width="800"
  >
    <a-form>
      <a-form-item label="ФИО">
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item label="Дата рождения">
        <a-date-picker v-model:value="formState.birthday" />
      </a-form-item>
      <a-form-item label="Возраст">
        <a-input v-model:value="formState.age" />
      </a-form-item>
      <a-form-item label="Курс">
        <a-select
          v-model:value="formState.course_id"
          placeholder="Выбрать..."
          :options="courses"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
      <a-form-item label="Преодаватель">
        <a-select
          v-model:value="formState.teacher_id"
          placeholder="Выбрать..."
          :options="teachers"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
      <a-form-item label="Контактные данные">
        <a-input v-model:value="formState.contacts" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
