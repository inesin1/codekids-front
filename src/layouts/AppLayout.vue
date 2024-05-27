<script setup lang="ts">
import { ref } from 'vue'
import AppAside from './app-aside/AppAside.vue'
import AppHeader from './AppHeader.vue'

// Data
const collapsed = ref<boolean>(false)
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :width="260"
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }"
    >
      <app-aside :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout :style="{ marginLeft: collapsed ? '80px' : '260px' }">
      <a-layout-header style="background: #fff; padding: 0; height: auto">
        <app-header />
      </a-layout-header>
      <a-layout-content
        :style="{
          overflow: 'initial',
          padding: '24px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
