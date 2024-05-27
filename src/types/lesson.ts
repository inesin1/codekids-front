import { Dayjs } from 'dayjs'
import { Student } from './student'
import { Teacher } from './teacher'
import { Course } from './course'

export enum LessonStatusTypes {
  Assigned = 'Назначен',
  Completed = 'Проведен',
  Canceled = 'Отменен',
  Rescheduled = 'Перенесен',
}

export enum PayStatusTypes {
  NotPaid = 'Не оплачен',
  Paid = 'Оплачен',
}

export interface Lesson {
  id: number
  datetime: Dayjs
  student: Student
  student_id: number
  teacher: Teacher
  teacher_id: number
  course: Course
  course_id: number
  status: LessonStatusTypes
  pay_status: PayStatusTypes
  comment?: string
}

export type ChangeLessonStatusFormState = {
  status: LessonStatusTypes
  comment: string
}
