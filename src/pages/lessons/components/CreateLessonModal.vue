<script lang="ts" setup>
const visible = defineModel<boolean>('visible')

const createLesson = () => {}
</script>

<template>
  <a-modal
    :open="visible"
    title="Добавление урока"
    okText="Добавить"
    @ok="createLesson"
    @cancel="visible = false"
    :width="800"
  >
    <a-form>
      <a-form-item label="Ученик">
        <a-select placeholder="Выбрать..." />
      </a-form-item>
      <a-form-item label="Ученик">
        <a-select placeholder="Выбрать..." />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
