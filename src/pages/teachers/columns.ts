import { ColumnType } from 'ant-design-vue/es/table'
import { Teacher } from '../../types/teacher'

interface TeachersColumnType extends ColumnType {
  dataIndex: keyof Teacher
}

export const columns: TeachersColumnType[] = [
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
    title: 'Курс',
    dataIndex: 'courses',
    key: 'courses',
    align: 'left',
    width: '70px',
    ellipsis: true,
  },
]
