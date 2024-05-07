<script lang="ts" setup>
const visible = defineModel<boolean>('visible')

const createTeacher = () => {}
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
        <a-select placeholder="Выбрать..." />
      </a-form-item>
      <a-form-item label="Преподаваемые курсы">
        <a-select placeholder="Выбрать..." />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
