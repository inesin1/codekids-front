import { Dayjs } from "dayjs";
import { Course } from "./course";
import { Teacher } from "./teacher";

export interface Student {
    id: number,
    name: string,
    birthday: Dayjs
    age: number
    teacher: Teacher,
    courses: Course,
    contacts: string
}