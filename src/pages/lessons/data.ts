import { CourseTypes } from "../../types/course-types";
import { LessonStatusTypes, PayStatusTypes } from "../../types/lesson";

export const data = [
    {
      id: 1,
      datetime: '29.04.2024 19:00 по МСК',
      student: { id: 1, name: 'Артём' },
      teacher: { id: 1, name: 'Валерия' },
      course: CourseTypes.GameMakerStudio,
      status: LessonStatusTypes.Completed,
      pay_status: PayStatusTypes.Paid,
    },
    {
        id: 2,
        datetime: '30.04.2024 20:00 по МСК',
        student: { id: 1, name: 'Андрей' },
        teacher: { id: 1, name: 'Валерия' },
        course: CourseTypes.Python,
        status: LessonStatusTypes.Completed,
        pay_status: PayStatusTypes.Paid,
      },
      {
        id: 3,
        datetime: '30.04.2024 19:00 по МСК',
        student: { id: 1, name: 'Александр' },
        teacher: { id: 1, name: 'Виктория' },
        course: CourseTypes.Scratch,
        status: LessonStatusTypes.Rescheduled,
        pay_status: PayStatusTypes.NotPaid,
      },
      {
        id: 4,
        datetime: '01.05.2024 18:00 по МСК',
        student: { id: 1, name: 'Артём' },
        teacher: { id: 1, name: 'Валерия' },
        course: CourseTypes.GameMakerStudio,
        status: LessonStatusTypes.Completed,
        pay_status: PayStatusTypes.Paid,
      },
      {
        id: 5,
        datetime: '02.05.2024 18:00 по МСК',
        student: { id: 1, name: 'Дамир' },
        teacher: { id: 1, name: 'Кирилл' },
        course: CourseTypes.Roblox,
        status: LessonStatusTypes.Completed,
        pay_status: PayStatusTypes.Paid,
      },
      {
        id: 6,
        datetime: '03.05.2024 19:00 по МСК',
        student: { id: 1, name: 'Артём' },
        teacher: { id: 1, name: 'Валерия' },
        course: CourseTypes.GameMakerStudio,
        status: LessonStatusTypes.Completed,
        pay_status: PayStatusTypes.Paid,
      },
      {
        id: 7,
        datetime: '03.05.2024 13:00 по МСК',
        student: { id: 1, name: 'Александр' },
        teacher: { id: 1, name: 'Виктория' },
        course: CourseTypes.Scratch,
        status: LessonStatusTypes.Completed,
        pay_status: PayStatusTypes.Paid,
      },
      {
        id: 8,
        datetime: '03.05.2024 16:00 по МСК',
        student: { id: 1, name: 'Тимофей' },
        teacher: { id: 1, name: 'Кирилл' },
        course: CourseTypes.Scratch,
        status: LessonStatusTypes.Canceled,
        pay_status: PayStatusTypes.NotPaid,
      },
      {
        id: 9,
        datetime: '04.05.2024 18:00 по МСК',
        student: { id: 1, name: 'Дамир' },
        teacher: { id: 1, name: 'Кирилл' },
        course: CourseTypes.Roblox,
        status: LessonStatusTypes.Assigned,
        pay_status: PayStatusTypes.NotPaid,
      },
      {
        id: 10,
        datetime: '07.05.2024 18:00 по МСК',
        student: { id: 1, name: 'Александр' },
        teacher: { id: 1, name: 'Виктория' },
        course: CourseTypes.Scratch,
        status: LessonStatusTypes.Assigned,
        pay_status: PayStatusTypes.NotPaid,
      },

  ]