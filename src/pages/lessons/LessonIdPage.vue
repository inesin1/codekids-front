<script setup lang="ts">
import { useApi } from '../../services/api'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { rules } from './components/create-lesson-modal/validation-rules'
import {
  Lesson,
  LessonStatusTypes,
  PayStatusTypes,
  ChangeLessonStatusFormState,
} from '../../types/lesson'
import { Course } from '@/types/course'
import { Student } from '@/types/student'
import { Teacher } from '@/types/teacher'
import dayjs from 'dayjs'
import { createNotification } from '../../helpers/notifications'
import { useUserStore } from '../../stores/user.store'
import { RoleTypes } from '@/types/user'
import ChangeLessonStatusModal from './components/change-lesson-status-modal/ChangeLessonStatusModal.vue'
import { formatDate } from '@/helpers/format-date'

// Data
const route = useRoute()
const router = useRouter()
const {
  currentUser: { role: userRole },
} = useUserStore()
const id = +route.params.id
const lesson = ref<Lesson>(null)

const isEdit = ref(false)
const isChangeStatusModalVisible = ref(false)
const isSaveButtonLoading = ref(false)
const isRemoveButtonLoading = ref(false)

// Api
const { getOne, update, remove } = useApi<Lesson>('lesson')
const { getAllReactive: getStudents } = useApi<Student>('student')
const { getAllReactive: getTeachers } = useApi<Teacher>('teacher')
const { getAllReactive: getCourses } = useApi<Course>('course')
const { data: students } = getStudents()
const { data: teachers } = getTeachers()
const { data: courses } = getCourses()

// Methods
const loadLesson = async () => {
  lesson.value = await getOne(id, { with: ['student', 'teacher', 'course'] })
  //lesson.value.datetime = dayjs(lesson.value.datetime)
}
const updateLesson = async (
  changeLessonStatusFormState?: ChangeLessonStatusFormState
) => {
  try {
    isSaveButtonLoading.value = true

    const lessonUpdate = {
      ...lesson.value,
      student_id: lesson.value.student.id,
      teacher_id: lesson.value.teacher.id,
      course_id: lesson.value.course.id,
    }

    // Если переданы данные для обновления статуса
    if (changeLessonStatusFormState) {
      lessonUpdate.status = changeLessonStatusFormState.status
      lessonUpdate.comment = changeLessonStatusFormState.comment
    }

    await update(id, lessonUpdate)
    createNotification('success', 'Занятие успешно обновлено!')
  } catch (e) {
    createNotification('error', `Ошибка: ${e.message}`)
  } finally {
    isSaveButtonLoading.value = false
    isEdit.value = false
    loadLesson()
  }
}

const removeLesson = async () => {
  try {
    await remove(id)
    createNotification('success', 'Занятие успешно удалено!')
  } catch (e) {
    createNotification('error', `Ошибка: ${e.message}`)
  } finally {
    router.back()
  }
}

onMounted(async () => {
  loadLesson()
})
</script>

<template>
  <a-space direction="vertical">
    <a-space>
      <a-space v-if="userRole !== RoleTypes.Teacher">
        <a-button v-if="!isEdit" type="primary" @click="isEdit = true">
          Редактировать
        </a-button>
        <a-button
          v-else
          type="primary"
          @click="updateLesson"
          :loading="isSaveButtonLoading"
        >
          Сохранить
        </a-button>
        <a-button
          type="primary"
          danger
          @click="removeLesson"
          :loading="isRemoveButtonLoading"
        >
          Удалить
        </a-button>
      </a-space>
      <a-button
        :disabled="!lesson || lesson.status !== LessonStatusTypes.Assigned"
        @click="isChangeStatusModalVisible = true"
      >
        Изменить статус
      </a-button>
    </a-space>

    <a-divider />

    <a-skeleton v-if="!lesson" active />
    <div v-else>
      <a-descriptions v-if="!isEdit" bordered :column="1">
        <a-descriptions-item label="Дата и время">
          {{ formatDate(lesson.datetime) }}
        </a-descriptions-item>
        <a-descriptions-item label="Ученик">
          {{ lesson.student.name }}
        </a-descriptions-item>
        <a-descriptions-item label="Преподаватель">
          {{ lesson.teacher.name }}
        </a-descriptions-item>
        <a-descriptions-item label="Курс">
          {{ lesson.course.name }}
        </a-descriptions-item>
        <a-descriptions-item label="Статус проведения">
          <a-tag
            :color="
              lesson.status === LessonStatusTypes.Canceled
                ? 'red'
                : lesson.status === LessonStatusTypes.Completed
                  ? 'green'
                  : 'yellow'
            "
          >
            {{ lesson.status }}
          </a-tag>
        </a-descriptions-item>
        <a-descriptions-item label="Статус оплаты">
          <a-tag
            :color="lesson.pay_status === PayStatusTypes.Paid ? 'green' : 'red'"
          >
            {{ lesson.pay_status }}
          </a-tag>
        </a-descriptions-item>
        <a-descriptions-item label="Комментарий">
          {{ lesson.comment }}
        </a-descriptions-item>
      </a-descriptions>

      <a-form
        v-else
        ref="formRef"
        :model="lesson"
        layout="vertical"
        :rules="rules"
      >
        <a-form-item label="Дата и время">
          <a-date-picker show-time v-model:value="lesson.datetime" />
        </a-form-item>
        <a-form-item label="Ученик">
          <a-select
            v-model:value="lesson.student.id"
            placeholder="Выбрать..."
            :options="students"
            :field-names="{ label: 'name', value: 'id' }"
          />
        </a-form-item>
        <a-form-item label="Преподаватель">
          <a-select
            v-model:value="lesson.teacher.id"
            placeholder="Выбрать..."
            :options="teachers"
            :field-names="{ label: 'name', value: 'id' }"
          />
        </a-form-item>
        <a-form-item label="Курс">
          <a-select
            v-model:value="lesson.course.id"
            placeholder="Выбрать..."
            :options="courses"
            :field-names="{ label: 'name', value: 'id' }"
          />
        </a-form-item>
        <a-form-item label="Статус проведения">
          <a-select v-model:value="lesson.status">
            <a-select-option
              v-for="lessonStatusType in LessonStatusTypes"
              :value="lessonStatusType"
            >
              {{ lessonStatusType }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Статус оплаты">
          <a-select v-model:value="lesson.pay_status">
            <a-select-option
              v-for="payStatusType in PayStatusTypes"
              :value="payStatusType"
            >
              {{ payStatusType }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Комментарий">
          <a-textarea v-model:value="lesson.comment" />
        </a-form-item>
      </a-form>
    </div>
  </a-space>

  <change-lesson-status-modal
    v-if="isChangeStatusModalVisible"
    v-model:visible="isChangeStatusModalVisible"
    @save="updateLesson"
  />
</template>
