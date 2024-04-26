import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import AuthPage from '../pages/AuthPage.vue'
import LessonsPage from '../pages/lessons/LessonsPage.vue'
import StudentsPage from '../pages/StudentsPage.vue'
import TeachersPage from '../pages/TeachersPage.vue'
import LessonsAnalyticsPage from '../pages/LessonsAnalyticsPage.vue'
import FinanceAnalyticsPage from '../pages/FinanceAnalyticsPage.vue'
import ProfilePage from '../pages/profile/ProfilePage.vue'

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
