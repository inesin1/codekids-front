<script lang="ts" setup>
import { useRoute } from 'vue-router'
import UserDropdown from '../components/UserDropdown.vue'
import { computed } from 'vue'

// Data
const route = useRoute()
const pathItems = computed(() => route.path.split('/'))
</script>

<template>
  <a-flex
    horizontal
    justify="space-between"
    align="center"
    style="padding: 0 16px"
  >
  <a-page-header
    :title="`Пользователь ID ${id}`"
    @back="() => $router.back()"
  />
    <a-breadcrumb>
      <a-breadcrumb-item v-for="pathItem in pathItems">
        {{ pathItem }}
      </a-breadcrumb-item>
    </a-breadcrumb>

    <!-- Пользователь -->
    <user-dropdown />
  </a-flex>
</template>
