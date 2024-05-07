<script lang="ts" setup>
const { collapsed = false } = defineProps<{ collapsed: boolean }>()
</script>

<template>
  <router-link to="/">
    <a-flex>
      <span v-if="!collapsed" class="text-white text-2xl ml-6">
        <span class="text-[#42aaff]">Code</span>
        Kids
        <a-badge count="CRM" color="cyan" :offset="[0, -24]" />
      </span>
      <span v-else class="text-[#42aaff] text-2xl ml-8">C</span>
    </a-flex>
  </router-link>
</template>

<style scoped>
.container {
  height: 60px;
  background-color: gray;
  color: white;
}
.blue {
  color: aqua;
}
</style>
