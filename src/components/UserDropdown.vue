<script lang="ts" setup>
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '../stores/user.store'

const { logout } = useUserStore()
const currentUserId = 1
const profileLink = { name: 'Profile', params: { id: currentUserId } }
</script>

<template>
  <a-dropdown>
    <a-space style="cursor: pointer">
      <a-avatar :size="32">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <span>
        admin admin
        <DownOutlined />
      </span>
    </a-space>

    <template #overlay>
      <a-menu>
        <a-menu-item>
          <router-link :to="profileLink">Профиль</router-link>
        </a-menu-item>
        <a-menu-item danger @click="logout">Выход</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
