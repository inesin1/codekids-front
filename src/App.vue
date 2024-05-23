<script setup lang="ts">
import ruRU from 'ant-design-vue/es/locale/ru_RU'
import { ref } from 'vue'
import AppAside from './layouts/AppAside.vue'
import AppHeader from './layouts/AppHeader.vue'
import { useUserStore } from './stores/user.store'

// Data
const { currentUser } = useUserStore()
const collapsed = ref<boolean>(false)
</script>

<template>
  <a-config-provider :locale="ruRU">
    <a-layout style="min-height: 100vh">
      <a-layout-sider
        v-if="currentUser"
        v-model:collapsed="collapsed"
        collapsible
        :width="260"
      >
        <app-aside :collapsed="collapsed" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <app-header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view style="padding: 16px" />
        </a-layout-content>
      </a-layout>
    </a-layout>
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
