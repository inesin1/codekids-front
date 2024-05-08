<script lang="ts" setup>
import { Lesson } from '../../../types/lesson';
import { CourseTypes } from '../../../types/course-types'
import { data as teachers} from '../../teachers/data'
import { reactive } from 'vue';

const createStudent = () => {}
const emit = defineEmits<{
  save: [lesson: Partial<Lesson>]
}>()

const visible = defineModel<boolean>('visible')
const formState = reactive<Partial<Lesson>>({})
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
        <a-select placeholder="Выбрать..." 
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
