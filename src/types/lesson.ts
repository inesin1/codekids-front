import { Dayjs } from "dayjs"
import { Student } from "./student"
import { Teacher } from "./teacher"
import { Course } from "./course"

export enum LessonStatusTypes {
    Assigned = 'Назначен',
    Completed = 'Проведен',
    Canceled = 'Отменен',
    Rescheduled = 'Перенесен'
}

export enum PayStatusTypes {
    NotPaid = 'Не оплачен',
    Paid = 'Оплачен',
}

export interface Lesson {
    id: number
    datetime: Dayjs
    student: Student
    teacher: Teacher
    course: Course
    status: LessonStatusTypes
    pay_status: PayStatusTypes
}