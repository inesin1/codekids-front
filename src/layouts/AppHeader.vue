<script lang="ts" setup>
import { useRoute } from 'vue-router'
import _ from 'lodash'
import { computed } from 'vue'

// Data
const route = useRoute()
const pageTitle = computed(() => {
  const id = route.params.id
  const title = route.meta.title
  return id ? `${title} #${id}` : title
})
</script>

<template>
  <a-flex
    horizontal
    justify="space-between"
    align="center"
    style="padding-right: 16px"
  >
    <a-page-header :title="pageTitle" @back="() => $router.back()" />

    <!-- Пользователь -->
    <user-dropdown />
  </a-flex>
</template>
