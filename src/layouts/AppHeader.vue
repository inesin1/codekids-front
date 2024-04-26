<script lang="ts" setup>
import UserDropdown from '../components/UserDropdown.vue'
</script>

<template>
  <a-flex
    horizontal
    justify="space-between"
    align="center"
    style="padding: 0 16px"
  >
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>Bruh</a-breadcrumb-item>
      <a-breadcrumb-item>Sheesh</a-breadcrumb-item>
    </a-breadcrumb>

    <!-- Пользователь -->
    <user-dropdown />
  </a-flex>
</template>
