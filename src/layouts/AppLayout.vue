<script setup lang="ts">
import { ref } from 'vue'
import AppAside from './app-aside/AppAside.vue'
import AppHeader from './AppHeader.vue'

// Data
const collapsed = ref<boolean>(false)
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible :width="260">
      <app-aside :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; height: auto">
        <app-header />
      </a-layout-header>
      <a-layout-content style="padding: 16px">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
