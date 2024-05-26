<script lang="ts" setup>
import { ref } from 'vue'
import AppLogo from '../../components/AppLogo.vue'
import { items } from './menu-items'
import _ from 'lodash'
import { useUserStore } from '../../stores/user.store'
import { useRouter } from 'vue-router'

// Data
const { collapsed = false } = defineProps<{ collapsed: boolean }>()
const router = useRouter()
const store = useUserStore()
const selectedKeys = ref<string[]>([])
const filteredItems = _.filter(items, (item) =>
  _.includes(item.roles, store.currentUser?.role)
)

// Methods
const onMenuItemClick = ({ key }) => {
  router.push({ name: key })
}
</script>

<template>
  <app-logo :collapsed="collapsed" class="m-6" />
  <a-menu
    :items="filteredItems"
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="inline"
    @click="onMenuItemClick"
  />
</template>
