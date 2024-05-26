import { ColumnType } from 'ant-design-vue/es/table'
import { User } from '../../types/user'

interface UsersColumnType extends ColumnType {
  dataIndex: keyof User
}

export const columns: UsersColumnType[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'left',
    width: '30px',
    ellipsis: true,
  },
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    align: 'left',
    width: '30px',
    ellipsis: true,
  },
  {
    title: 'Логин',
    dataIndex: 'username',
    key: 'username',
    align: 'left',
    width: '30px',
    ellipsis: true,
  },
  {
    title: 'Роль',
    dataIndex: 'role',
    key: 'role',
    align: 'left',
    width: '30px',
    ellipsis: true,
  },
  {
    title: 'Активен',
    dataIndex: 'is_active',
    key: 'is_active',
    align: 'left',
    width: '30px',
    ellipsis: true,
  },
]
