<script lang="ts" setup>
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '../stores/user.store'

const userStore = useUserStore()
const profileLink = { name: 'UserId', params: { id: userStore.currentUser.id } }
</script>

<template>
  <a-dropdown>
    <a-space style="cursor: pointer">
      <a-avatar :size="32">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <span>
        {{ userStore.currentUser.name }}
        <DownOutlined />
      </span>
    </a-space>

    <template #overlay>
      <a-menu>
        <a-menu-item>
          <router-link :to="profileLink">Профиль</router-link>
        </a-menu-item>
        <a-menu-item danger @click="userStore.logout">Выход</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
