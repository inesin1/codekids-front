<script setup lang="ts">
import { ChangeLessonStatusFormState, LessonStatusTypes } from '@/types/lesson'
import { rules } from './validation-rules'
import { ref } from 'vue'
import { FormInstance } from 'ant-design-vue'

const emit = defineEmits<{
  save: [values: ChangeLessonStatusFormState]
}>()

const visible = defineModel<boolean>('visible')
const formState = ref<ChangeLessonStatusFormState>({
  comment: null,
  status: null,
})
const formRef = ref<FormInstance>()

// Methods
const onOk = async () => {
  await formRef.value.validate()
  emit('save', formState.value)
  visible.value = false
}
</script>

<template>
  <a-modal
    :open="visible"
    title="Изменение статуса занятия"
    okText="Подтвердить"
    @ok="onOk"
    @cancel="visible = false"
  >
    <a-form ref="formRef" :model="formState" :rules="rules" layout="vertical">
      <a-form-item label="Новый статус" name="status">
        <a-select v-model:value="formState.status" placeholder="Выбрать...">
          <a-select-option
            v-for="lessonStatusType in LessonStatusTypes"
            :value="lessonStatusType"
          >
            {{ lessonStatusType }}
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Комментарий" name="comment">
        <a-textarea v-model:value="formState.comment" :maxlength="100" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
