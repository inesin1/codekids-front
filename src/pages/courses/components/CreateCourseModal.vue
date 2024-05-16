<script lang="ts" setup>
import { reactive } from 'vue'
import { Lesson } from '../../../types/lesson'
import { Course } from '../../../types/course'

const emit = defineEmits<{
  save: [lesson: Partial<Lesson>]
}>()

// Data
const visible = defineModel<boolean>('visible')
const formState = reactive<Partial<Course>>({})

// Methods
const onOk = () => {
  emit('save', formState)
  visible.value = false
}
</script>

<template>
  <a-modal
    :open="visible"
    title="Добавление курса"
    okText="Добавить"
    @ok="onOk"
    @cancel="visible = false"
    :width="800"
  >
    <a-form>
      <a-form-item label="Наименование">
        <a-input v-model:value="formState.name" placeholder="Ввести..." />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
