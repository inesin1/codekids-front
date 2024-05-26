import { User } from '@/types/user'
import { Rule } from 'ant-design-vue/es/form'

export const rules: Record<keyof User, Rule[]> = {
  name: [
    { required: true, message: 'Введите имя пользователя!', trigger: 'change' },
  ],
  username: [{ required: true, message: 'Введите логин!', trigger: 'change' }],
  password: [{ required: true, message: 'Введите пароль!', trigger: 'change' }],
  role: [
    {
      required: true,
      message: 'Укажите роль пользователя!',
      trigger: 'change',
    },
  ],
  id: [],
  is_active: [],
}
