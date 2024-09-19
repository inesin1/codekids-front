<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useApi } from '../../../../services/api'
import { Course } from '../../../../types/course'
import { Lesson } from '../../../../types/lesson'
import { Student } from '../../../../types/student'
import { Teacher } from '../../../../types/teacher'
import { rules } from './validation-rules'
import { FormInstance } from 'ant-design-vue'

const emit = defineEmits<{
  save: [lesson: Partial<Lesson>]
}>()

const visible = defineModel<boolean>('visible')
const formState = reactive<Partial<Lesson>>({})
const formRef = ref<FormInstance>()

const { getAllReactive: getStudents } = useApi<Student>('student')
const { getAllReactive: getTeachers } = useApi<Teacher>('teacher')
const { getAllReactive: getCourses } = useApi<Course>('course')
const { data: students } = getStudents({ with: ['teacher', 'course'] })
const { data: teachers } = getTeachers()
const { data: courses } = getCourses()

// Methods
const onOk = async () => {
  await formRef.value.validate()
  emit('save', formState)
  visible.value = false
}

// При выборе ученика подставляем выбор преподавателя и курса
watch(
  () => formState.student_id,
  (newValue) => {
    const student = students.value.find((s) => s.id === newValue)
    formState.teacher_id = student.teacher.id
    formState.course_id = student.course.id
  }
)
</script>

<template>
  <a-modal
    :open="visible"
    title="Добавление урока"
    okText="Добавить"
    @ok="onOk"
    @cancel="visible = false"
  >
    <a-form ref="formRef" :model="formState" :rules="rules" layout="vertical">
      <a-form-item label="Дата и время" name="datetime">
        <a-date-picker show-time v-model:value="formState.datetime" />
      </a-form-item>
      <a-form-item label="Ученик" name="student_id">
        <a-select
          v-model:value="formState.student_id"
          placeholder="Выбрать..."
          :options="students"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
      <a-form-item label="Преподаватель" name="teacher_id">
        <a-select
          v-model:value="formState.teacher_id"
          placeholder="Выбрать..."
          :options="teachers"
          :field-names="{ label: 'name', value: 'id' }"
        />
      </a-form-item>
      <a-form-item label="Курс" name="course_id">
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
