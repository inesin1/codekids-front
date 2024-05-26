<script lang="ts" setup>
import { useUserStore } from '../stores/user.store'

const store = useUserStore()
</script>

<template>
  <a-typography-title :level="2">
    Добро пожаловать, {{ store.currentUser.name.split(' ')[0] }}!
  </a-typography-title>
  <a-image :width="500" src="https://cataas.com/cat/gif" :preview="false">
    <template #placeholder>
      <a-spin>
        <div>Гифка с котиком загружается...</div>
      </a-spin>
    </template>
  </a-image>
</template>
