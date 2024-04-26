<script lang="ts" setup>
const {collapsed = false } = defineProps<{ collapsed: boolean }>();
</script>

<template>
  <div class="container"><span class="blue">Code</span>Kids</div>

  <router-link to="/">
    <a-flex class="ml-2 h-14 flex items-center ml-6">
      <div class="flex items-center">
        <div class="icon-[ph--rocket-duotone] text-sky-600 text-3xl" />
        <span
          v-show="!collapsed"
          class="whitespace-nowrap ml-1 text-neutral-600 dark:text-neutral-200 font-black"
        >
          <span class="text-[#FF3107]">R</span>OCKET B2B
        </span>
      </div>
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
