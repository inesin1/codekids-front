<script lang="ts" setup>
const visible = defineModel<boolean>('visible')

const createStudent = () => {}
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
        <a-select placeholder="Выбрать..." />
      </a-form-item>
      <a-form-item label="Дата рождения">
        <a-select placeholder="Выбрать..." />
      </a-form-item>
      <a-form-item label="Возраст">
        <a-select placeholder="Выбрать..." />
      </a-form-item>
      <a-form-item label="Курс">
        <a-select placeholder="Выбрать..." />
      </a-form-item>
      <a-form-item label="Преодаватель">
        <a-select placeholder="Выбрать..." />
      </a-form-item>
      <a-form-item label="Контактные данные">
        <a-select placeholder="Выбрать..." />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
