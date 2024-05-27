import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import AuthPage from '../pages/auth/AuthPage.vue'
import LessonsPage from '../pages/lessons/LessonsPage.vue'
import TeachersPage from '../pages/teachers/TeachersPage.vue'
import LessonsAnalyticsPage from '../pages/lessons-analytics/LessonsAnalyticsPage.vue'
import FinanceAnalyticsPage from '../pages/finance-analytics/FinanceAnalyticsPage.vue'
import ProfilePage from '../pages/profile/ProfilePage.vue'
import StudentsPage from '../pages/students/StudentsPage.vue'
import CoursesPage from '../pages/courses/CoursesPage.vue'
import { useUserStore } from '../stores/user.store'
import UsersPage from '@/pages/users/UsersPage.vue'
import UserIdPage from '@/pages/users/UserIdPage.vue'
import LessonIdPage from '@/pages/lessons/LessonIdPage.vue'

const routes = [
  {
    name: 'Main',
    path: '/',
    component: MainPage,
    meta: {
      title: 'Главная',
      requiresAuth: true,
    },
  },
  {
    name: 'Lessons',
    path: '/lessons',
    component: LessonsPage,
    meta: {
      title: 'Уроки',
      requiresAuth: true,
    },
  },
  {
    name: 'LessonId',
    path: '/lessons/:id',
    component: LessonIdPage,
    meta: {
      title: 'Урок',
      requiresAuth: true,
    },
  },
  {
    name: 'Students',
    path: '/students',
    component: StudentsPage,
    meta: {
      title: 'Ученики',
      requiresAuth: true,
    },
  },
  {
    name: 'Teachers',
    path: '/teachers',
    component: TeachersPage,
    meta: {
      title: 'Преподаватели',
      requiresAuth: true,
    },
  },
  {
    name: 'Courses',
    path: '/courses',
    component: CoursesPage,
    meta: {
      title: 'Курсы',
      requiresAuth: true,
    },
  },
  {
    name: 'Users',
    path: '/users',
    component: UsersPage,
    meta: {
      title: 'Пользователи',
      requiresAuth: true,
    },
  },
  {
    name: 'UserId',
    path: '/users/:id',
    component: UserIdPage,
    meta: {
      title: 'Пользователь',
      requiresAuth: true,
    },
  },
  {
    name: 'LessonsAnalytics',
    path: '/analytics/lessons',
    component: LessonsAnalyticsPage,
    meta: {
      title: 'Отчет об уроках',
      requiresAuth: true,
    },
  },
  {
    name: 'FinanceAnalytics',
    path: '/analytics/finance',
    component: FinanceAnalyticsPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'Profile',
    path: '/profile/:id',
    component: ProfilePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'Login',
    path: '/login',
    component: AuthPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { accessToken } = useUserStore()

  if (to.meta.requiresAuth) {
    if (accessToken) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
