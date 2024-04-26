<script setup lang="ts">
import {  ref } from 'vue'
import { FormInstance } from 'ant-design-vue'
import {FormItemTypes, FormSchema} from "../types/form-schema.ts";
import {formLayouts} from "../helpers/form-layout";

// Data
const formRef = ref<FormInstance>()
const { schema } = defineProps<{ schema: FormSchema }>()
const model = defineModel<any>()

// Methods
const validateFields = async () => {
  return formRef.value.validateFields()
}

// Expose
defineExpose({
  validateFields
})
</script>

<template>
  <a-form
    ref="formRef"
    :model="model"
    label-align="left"
    v-bind="formLayouts.labelLong"
  >
    <a-form-item
      v-for="item in schema.items"
      :name="item.name"
      :label="item.label"
      :rules="item.rules"
      :tooltip="item.hint"
    >
      <!-- Label -->
      <template v-if="item.type === FormItemTypes.Custom" #label>
        <!-- rest нужен для того чтобы FormItem не собирал с него данные автоматически -->
        <a-form-item-rest>
          <a-select placeholder="Поле..." v-model:value="item.name">
            <a-select-opt-group
              v-for="optionGroup in schema.custom_fields"
              :label="optionGroup.label"
            >
              <a-select-option
                v-for="option in optionGroup.options"
                :value="option.value"
              >
                {{ option.label }}
              </a-select-option>
            </a-select-opt-group>
          </a-select>
        </a-form-item-rest>
      </template>

      <!-- Item -->
      <a-input
        v-if="item.type === FormItemTypes.Input"
        :placeholder="item.label"
        v-model:value="model[item.name]"
      />
      <a-textarea
        v-if="item.type === FormItemTypes.TextArea"
        :placeholder="item.label"
        v-model:value="model[item.name]"
        :maxlength="100"
      />
      <a-select
        v-else-if="item.type === FormItemTypes.Select"
        placeholder="Выбрать..."
        v-model:value="model[item.name]"
        :loading="item.options === null || item.optionGroups === null"
      >
        <template v-if="item.options">
          <a-select-option v-for="option in item.options" :value="option.value">
            {{ option.label }}
          </a-select-option>
        </template>
        <template v-if="item.optionGroups">
          <a-select-opt-group
            v-for="optionGroup in item.optionGroups"
            :label="optionGroup.label"
          >
            <a-select-option
              v-for="option in optionGroup.options"
              :value="option.value"
            >
              {{ option.label }}
            </a-select-option>
          </a-select-opt-group>
        </template>
      </a-select>
      <a-select
        v-else-if="item.type === FormItemTypes.Multiselect"
        placeholder="Выбрать..."
        v-model:value="model[item.name]"
        :loading="item.options === null || item.optionGroups === null"
        mode="multiple"
      >
        <template v-if="item.options">
          <a-select-option v-for="option in item.options" :value="option.value">
            {{ option.label }}
          </a-select-option>
        </template>
        <template v-if="item.optionGroups">
          <a-select-opt-group
            v-for="optionGroup in item.optionGroups"
            :label="optionGroup.label"
          >
            <a-select-option
              v-for="option in optionGroup.options"
              :value="option.value"
            >
              {{ option.label }}
            </a-select-option>
          </a-select-opt-group>
        </template>
      </a-select>
      <a-select
        v-else-if="item.type === FormItemTypes.Tags"
        placeholder="Введите теги..."
        mode="tags"
        v-model:value="model[item.name]"
      />
    </a-form-item>
  </a-form>
</template>
