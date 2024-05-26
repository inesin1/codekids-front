<script setup lang="ts">
import ruRU from 'ant-design-vue/es/locale/ru_RU'
import { useUserStore } from './stores/user.store'
import { storeToRefs } from 'pinia'
import AppLayout from './layouts/AppLayout.vue'
import AppNotAuthenticatedLayout from './layouts/AppNotAuthenticatedLayout.vue'

// Data
const { isAuthenticated } = storeToRefs(useUserStore())
</script>

<template>
  <a-config-provider :locale="ruRU">
    <app-layout v-if="isAuthenticated" />
    <app-not-authenticated-layout v-else />
  </a-config-provider>
</template>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
