import { ItemType as AntMenuItem } from 'ant-design-vue'
import { RoleTypes } from '../../types/user'
import { h } from 'vue'
import {
  PieChartOutlined,
  DesktopOutlined,
  HomeOutlined,
  ReadOutlined,
  SolutionOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'

export type MenuItem = AntMenuItem & {
  roles: RoleTypes[]
}

export const items: MenuItem[] = [
  {
    key: 'Main',
    label: 'Главная',
    icon: h(HomeOutlined),
    roles: [RoleTypes.Admin, RoleTypes.Manager, RoleTypes.Teacher],
  },
  {
    key: 'Lessons',
    label: 'Уроки',
    icon: h(ReadOutlined),
    roles: [RoleTypes.Admin, RoleTypes.Manager, RoleTypes.Teacher],
  },
  {
    key: 'Students',
    label: 'Ученики',
    icon: h(SmileOutlined),
    roles: [RoleTypes.Admin, RoleTypes.Manager],
  },
  {
    key: 'Teachers',
    label: 'Преподаватели',
    icon: h(SolutionOutlined),
    roles: [RoleTypes.Admin, RoleTypes.Manager],
  },
  {
    key: 'Courses',
    label: 'Курсы',
    icon: h(DesktopOutlined),
    roles: [RoleTypes.Admin, RoleTypes.Manager],
  },
  {
    key: 'Users',
    label: 'Пользователи',
    icon: h(UserOutlined),
    roles: [RoleTypes.Admin],
  },
  {
    key: 'Analytics',
    label: 'Аналитика',
    icon: h(PieChartOutlined),
    roles: [RoleTypes.Admin],
    children: [
      {
        key: 'LessonsAnalytics',
        label: 'Проведенные уроки',
        icon: h(PieChartOutlined),
      },
    ],
  },
]
