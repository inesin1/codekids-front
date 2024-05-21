import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import AuthPage from '../pages/auth/AuthPage.vue'
import LessonsPage from '../pages/lessons/LessonsPage.vue'
import TeachersPage from '../pages/teachers/TeachersPage.vue'
import LessonsAnalyticsPage from '../pages/LessonsAnalytics/LessonsAnalyticsPage.vue'
import FinanceAnalyticsPage from '../pages/FinanceAnalytics/FinanceAnalyticsPage.vue'
import ProfilePage from '../pages/profile/ProfilePage.vue'
import StudentsPage from '../pages/students/StudentsPage.vue'
import CoursesPage from '../pages/courses/CoursesPage.vue'

const routes = [
  {
    name: 'Main',
    path: '/',
    component: MainPage,
  },
  {
    name: 'Auth',
    path: '/auth',
    component: AuthPage,
  },
  {
    name: 'Lessons',
    path: '/lessons',
    component: LessonsPage,
  },
  {
    name: 'Students',
    path: '/students',
    component: StudentsPage,
  },
  {
    name: 'Teachers',
    path: '/teachers',
    component: TeachersPage,
  },
  {
    name: 'Courses',
    path: '/courses',
    component: CoursesPage,
  },
  {
    name: 'LessonsAnalytics',
    path: '/analytics/lessons',
    component: LessonsAnalyticsPage,
  },
  {
    name: 'FinanceAnalytics',
    path: '/analytics/finance',
    component: FinanceAnalyticsPage,
  },
  {
    name: 'Profile',
    path: '/profile/:id',
    component: ProfilePage,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
