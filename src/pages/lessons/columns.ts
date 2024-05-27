import { ColumnType } from 'ant-design-vue/es/table'
import type { Lesson } from '../../types/lesson'

interface LessonsColumnType extends ColumnType {
  dataIndex?: keyof Lesson
}

export const columns: LessonsColumnType[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'left',
    width: '30px',
    ellipsis: true,
  },
  {
    title: 'Дата и время',
    dataIndex: 'datetime',
    key: 'datetime',
    align: 'left',
    width: '80px',
    ellipsis: true,
  },
  {
    title: 'Ученик',
    dataIndex: 'student',
    key: 'student',
    align: 'left',
    width: '80px',
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
    title: 'Курс',
    dataIndex: 'course',
    key: 'course',
    align: 'left',
    width: '70px',
    ellipsis: true,
  },
  {
    title: 'Статус проведения',
    dataIndex: 'status',
    key: 'status',
    align: 'left',
    width: '60px',
    ellipsis: true,
  },
  {
    title: 'Статус оплаты',
    dataIndex: 'pay_status',
    key: 'pay_status',
    align: 'left',
    width: '50px',
    ellipsis: true,
  },
]
