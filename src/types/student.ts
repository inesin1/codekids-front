import { Dayjs } from "dayjs";
import { CourseTypes } from "./course-types";
import { Teacher } from "./teacher";

export interface Student {
    id: number,
    name: string,
    birthday: Dayjs
    age: number
    teacher: Teacher,
    courses: CourseTypes[]
    contacts: string
}