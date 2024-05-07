import { CourseTypes } from "../../types/course-types";

export const data = [
    {
        id: 1,
        name: 'Артём',
        birthday: '25.12.2008',
        age: 15,
        teacher: { id: 1, name: 'Валерия' },
        courses: [CourseTypes.GameMakerStudio],
        contacts: '+7 (908) 051-34-67'
      },
      {
        id: 2,
        name: 'Андрей',
        birthday: '01.03.2011',
        age: 13,
        teacher: { id: 2, name: 'Валерия' },
        courses: [CourseTypes.Python],
        contacts: '+7 (908) 051-34-67'
      },
      {
        id: 3,
        name: 'Александр',
        birthday: '11.02.2013',
        age: 11,
        teacher: { id: 3, name: 'Виктория' },
        courses: [CourseTypes.Scratch],
        contacts: '+7 (908) 051-34-67'
      },
      {
        id: 4,
        name: 'Дамир',
        birthday: '09.03.2015',
        age: 9,
        teacher: { id: 4, name: 'Кирилл' },
        courses: [CourseTypes.Roblox],
        contacts: '+7 (908) 051-34-67'
      },
      {
        id: 5,
        name: 'Тимофей',
        birthday: '03.03.2014',
        age: 10,
        teacher: { id: 5, name: 'Кирилл' },
        courses: [CourseTypes.Scratch],
        contacts: '+7 (908) 051-34-67'
      },
]