<script lang="ts" setup>
import { reactive } from 'vue';
import { Lesson } from '../../../types/lesson';


const createCourse = () => {}
const emit = defineEmits<{
  save: [lesson: Partial<Lesson>]
}>()

const visible = defineModel<boolean>('visible')
const formState = reactive<Partial<Lesson>>({})
</script>

<template>
  <a-modal
    :open="visible"
    title="Добавление  курса"
    okText="Добавить"
    @ok="createCourse"
    @cancel="visible = false"
    :width="800"
  >
    <a-form>
      <a-form-item label="Наименование">
        <a-input placeholder="Ввести..." />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
