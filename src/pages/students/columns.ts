import { ColumnType } from 'ant-design-vue/es/table'
import { Student } from '../../types/student'

interface StudentsColumnType extends ColumnType {
  dataIndex: keyof Student
}

export const columns: StudentsColumnType[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'left',
    width: '30px',
    ellipsis: true,
  },
  {
    title: 'ФИО',
    dataIndex: 'name',
    key: 'name',
    align: 'left',
    width: '80px',
    ellipsis: true,
  },
  {
    title: 'Дата рождения',
    dataIndex: 'birthday',
    key: 'birthday',
    align: 'left',
    width: '80px',
    ellipsis: true,
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    key: 'age',
    align: 'left',
    width: '50px',
    ellipsis: true,
  },
  {
    title: 'Курс',
    dataIndex: 'course',
    key: 'course',
    align: 'left',
    width: '70px',
    ellipsis: true,
  },
  {
    title: 'Преподаватель',
    dataIndex: 'teacher',
    key: 'teacher',
    align: 'left',
    width: '80px',
    ellipsis: true,
  },
  {
    title: 'Контактные данные',
    dataIndex: 'contacts',
    key: 'contacts',
    align: 'left',
    width: '50px',
    ellipsis: true,
  },
]
