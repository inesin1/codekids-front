import { Lesson } from '@/types/lesson'
import { Rule } from 'ant-design-vue/es/form'

export const rules: Record<keyof Lesson, Rule[]> = {
  id: [],
  datetime: [
    { required: true, message: 'Введите дату урока!', trigger: 'change' },
  ],
  status: [],
  pay_status: [],
  comment: [],
  student_id: [
    { required: true, message: 'Выберите курс!', trigger: 'change' },
  ],
  teacher_id: [
    { required: true, message: 'Выберите курс!', trigger: 'change' },
  ],
  course_id: [{ required: true, message: 'Выберите курс!', trigger: 'change' }],
  student: [],
  teacher: [],
  course: [],
}
