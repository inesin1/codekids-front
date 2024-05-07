<script lang="ts" setup>
import { ref } from 'vue'
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons-vue'
import AppLogo from '../components/AppLogo.vue'

const { collapsed = false } = defineProps<{ collapsed: boolean }>()

const selectedKeys = ref<string[]>(['1'])
</script>

<template>
  <app-logo :collapsed="collapsed" class="m-6" />
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <a-menu-item key="1" @click="$router.push({ name: 'Main' })">
      <pie-chart-outlined />
      <span>Главная</span>
    </a-menu-item>
    <a-menu-item key="2" @click="$router.push({ name: 'Lessons' })">
      <pie-chart-outlined />
      <span>Уроки</span>
    </a-menu-item>
    <a-menu-item key="3" @click="$router.push({ name: 'Students' })">
      <desktop-outlined />
      <span>Ученики</span>
    </a-menu-item>
    <a-menu-item key="4" @click="$router.push({ name: 'Teachers' })">
      <desktop-outlined />
      <span>Преподаватели</span>
    </a-menu-item>
    <a-sub-menu>
      <template #title>
        <desktop-outlined />
        <span>Аналитика</span>
      </template>
      <a-menu-item key="5" @click="$router.push({ name: 'LessonsAnalytics' })">
        <desktop-outlined />
        Проведенные уроки
      </a-menu-item>
      <a-menu-item key="6" @click="$router.push({ name: 'FinanceAnalytics' })">
        <desktop-outlined />
        Доходы
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
