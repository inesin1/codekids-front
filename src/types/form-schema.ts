import { Rule } from 'ant-design-vue/es/form'
import { Ref } from 'vue'

export type SelectOption = {
  label: string
  value: number | string
}

export type SelectOptionGroup = {
  label: string
  options: SelectOption[]
}

export enum FormItemTypes {
  Input,
  TextArea,
  Select,
  Multiselect,
  Tags,
  TimeInterval,
  Custom
}

export interface FormItem {
  name: string
  type: FormItemTypes
  label?: string
  hint?: string
  options?: SelectOption[] | Ref<SelectOption[]>
  optionGroups?: SelectOptionGroup[] | Ref<SelectOptionGroup[]>
  rules?: Rule[]
}

export interface FormSchema {
  name?: string
  items: FormItem[]
  custom_fields?: SelectOptionGroup[] | Ref<SelectOptionGroup[]>
}
