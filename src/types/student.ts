import { Dayjs } from "dayjs";

export interface Student {
    id: number,
    name: string,
    birthday: Dayjs
    age: number
    teacher: Teacher,
    courses: CourseTypes[]
    contacts: string
}