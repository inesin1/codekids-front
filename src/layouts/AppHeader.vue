<script lang="ts" setup>
import { useRoute } from 'vue-router'
import UserDropdown from '../components/UserDropdown.vue'
import { computed } from 'vue'
import { useUserStore } from '../stores/user.store'

// Data
const route = useRoute()
const { currentUser } = useUserStore()
const pathItems = computed(() => route.path.split('/'))
</script>

<template>
  <a-flex
    horizontal
    justify="space-between"
    align="center"
    style="padding: 0 16px"
  >
    <a-breadcrumb>
      <a-breadcrumb-item v-for="pathItem in pathItems">
        {{ pathItem }}
      </a-breadcrumb-item>
    </a-breadcrumb>

    <!-- Пользователь -->
    <div>
      <user-dropdown v-if="currentUser" />

      <a-typography-text v-else type="secondary">
        Пользователь не авторизован
      </a-typography-text>
    </div>
  </a-flex>
</template>
