import { ChangeLessonStatusFormState } from '@/types/lesson'
import { Rule } from 'ant-design-vue/es/form'

export const rules: Record<keyof ChangeLessonStatusFormState, Rule[]> = {
  status: [{ required: true, message: 'Выберите статус!', trigger: 'change' }],
  comment: [
    { required: true, message: 'Введите комментарий!', trigger: 'change' },
  ],
}
