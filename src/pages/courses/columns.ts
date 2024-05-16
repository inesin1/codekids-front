import { ColumnType } from 'ant-design-vue/es/table'
import { Course } from '../../types/course'

interface CoursesColumnType extends ColumnType {
  dataIndex: keyof Course
}

export const columns: CoursesColumnType[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'left',
    width: '30px',
    ellipsis: true,
  },
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name',
    align: 'left',
    width: '80px',
    ellipsis: true,
  },
  // TODO Столбец со студентами
]
