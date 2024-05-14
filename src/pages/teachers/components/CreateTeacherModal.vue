<script lang="ts" setup>
import { reactive } from 'vue';
import { Lesson } from '../../../types/lesson';
import { CourseTypes } from '../../../types/course-types';

const createTeacher = () => {}
const emit = defineEmits<{
  save: [lesson: Partial<Lesson>]
}>()

const visible = defineModel<boolean>('visible')
const formState = reactive<Partial<Lesson>>({})
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
          placeholder="Выбрать..." 
          v-model:value="formState.course"
        >
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
