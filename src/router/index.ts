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

const routes = [
  {
    name: 'Main',
    path: '/',
    component: MainPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'Lessons',
    path: '/lessons',
    component: LessonsPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'Students',
    path: '/students',
    component: StudentsPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'Teachers',
    path: '/teachers',
    component: TeachersPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'Courses',
    path: '/courses',
    component: CoursesPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'Users',
    path: '/users',
    component: UsersPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'UserId',
    path: '/users/:id',
    component: UserIdPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'LessonsAnalytics',
    path: '/analytics/lessons',
    component: LessonsAnalyticsPage,
    meta: {
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
